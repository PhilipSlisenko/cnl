"""
create db
// run periodic manager
create conversation
add event from user
"""

import uuid
from pprint import pprint
from time import sleep

import httpx
from cnl_engine.api.schemas import CreatedConversationId
from cnl_engine.db.db_management.create_tables import create_tables
from cnl_engine.db.repositories.conversation_history import get_history
from cnl_engine.db.repositories.new_events_engine_management import add_event_for_front
from cnl_engine.types.common_types import ChatMessage, UserMessageEvent
from cnl_engine.utils.utils import zulu_time_now_str

APP_URL = "http://localhost:5001"

# create conversation
response: CreatedConversationId = httpx.post(f"{APP_URL}/create-conversation").json()
conversation_id = response["conversation_id"]

# add event from front
event_from_user: UserMessageEvent = {
    "type": "new-message",
    "payload": {
        "message": {
            "message_id": str(uuid.uuid4()),
            "from_": "user",
            "content": "hello from user",
            "timestamp": zulu_time_now_str(),
            "dataset_samples": [],
            "user_feedback": "",
        }
    },
}
httpx.post(
    f"{APP_URL}/add-event",
    params={"conversation_id": conversation_id},
    json=event_from_user,
)

# get history
history = get_history(conversation_id)
pprint(history)
