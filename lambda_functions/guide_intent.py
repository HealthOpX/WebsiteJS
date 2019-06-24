#Guide intent functionality

import math
import dateutil.parser
import datetime
import time
import os
import logging

import lambda_function

logger = logging.getLogger()
logger.setLevel(logging.DEBUG)


""" --- Helpers to build responses which match the structure of the necessary dialog actions --- """

def execute_query(query):
    pass


def get_slots(intent_request):
    """
    Helper function, returns slots
    """
    return intent_request["currentIntent"]["slots"]

def close(session_attributes, fulfillment_state, message):
    response = {
        'sessionAttributes': session_attributes,
        'dialogAction': {
            'type': 'Close',
            'fulfillmentState': fulfillment_state,
            'message': message
        }
    }

    return response

def build_validation_result(is_valid, violated_slot, message_content):
    if message_content is None:
        return {
            "isValid": is_valid,
            "violatedSlot": violated_slot,
                }

    return {
        'isValid': is_valid,
        'violatedSlot': violated_slot,
        'message': {'contentType': 'PlainText', 
                    'content': message_content}
            }
    
    
def validate_response(want_help):
    if want_help != None:
        if want_help.lower() == "yes" or want_help.lower() == 'y':
            return build_validation_result(True, "WantHelp", "How may I help you?")
            pass
        
        elif want_help.lower() == "no" or want_help.lower() == 'n':
            #Some functionality to close the window,
            #  If put right here then will close the window before message?
            return build_validation_result(True, "WantHelp", "Sounds good, let me know if you need anything!")
            pass
        
        else:
            return build_validation_result(False, "WantHelp", "Please enter yes, no y or n to respond")
            pass
        
    else:
        return build_validation_result(False, "WantHelp", "Would you like help with something?")


    
def guide(intent_request):
    #logger.debug()
    
    #get_slots
    #source -> DialogCodeHook or what?
    source = intent_request["invocationSource"] 
    #DialogCodeHook or FulfillmentCodeHook
    
    
    return close(intent_request['sessionAttributes'],
             'Fulfilled',
             {'contentType': 'PlainText',
              'content': 'We are in the endgame now'})    
    
    session_attributes = intent_request["sessionAttributes"]
    intent_name = intent_request["currentIntent"]["name"]
    
    #fulfillmentState: Fulfilled or Failed
    if source == "DialogCodeHook":
        slots = get_slots(intent_request)
        want_help = slots["WantHelp"]
        
        validation_result = validate_response(want_help)
        
        if not validation_result["isValid"]: #Continue if isValid equals False
            message = validation_result["message"]
        #    pass

        # return close(intent_request['sessionAttributes'],
        #      'Fulfilled',
        #      {'contentType': 'PlainText',
        #       'content': 'CheckUp'})
            return {
                'sessionAttributes': session_attributes,
                'dialogAction': {
                    'type': "ElicitSlot",
                    'intentName': intent_name,
                    'slots': slots,
                    'slotToElicit': "WantHelp",
                    'message': message
                } 
            }
            
        #Change latter to function parameter being returned
        if want_help == 'n' or "no":
            
            validation_result = validate_response(want_help)
            message = validation_result["message"]
            #message = {'contentType': 'PlainText',
            #              'content': 'CheckUp'}
            return close(
                        intent_request['sessionAttributes'],
                        'Fulfilled',
                        message)
                 
                 
        elif want_help == 'y' or "yes":
            message = validation_result["message"]
            return {
                    'sessionAttributes': session_attributes,
                    'dialogAction': {
                        'type': "ElicitIntent",
                        'intentName': intent_name,
                        'message': message
                                    }                 
                    }
            

""" --- Intents --- """



""" --- Main handler --- """


def lambda_handler(event, context):
    """
    Route the incoming request based on intent.
    The JSON body of the request is provided in the event slot.
    """
    # By default, treat the user request as coming from the America/New_York time zone.
    os.environ['TZ'] = 'America/New_York'
    time.tzset()
    
    #Bots name from bot json 
    logger.debug('event.bot.name={}'.format(event['bot']['name']))

    return dispatch(event)
