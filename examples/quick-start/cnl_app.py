import uuid

from cnl_engine.types.common_types import ChatMessage
from typing_extensions import List


def main(history: List[ChatMessage], meta: dict, cnl_store: dict) -> ChatMessage:
    current_counter = cnl_store.get("counter", 1)
    cnl_store.update({"counter": current_counter + 1})
    return {
        "content": f'You just said: "{history[-1]["content"]}"\n'
        f"And this is my {current_counter} message",
        "dataset_samples": [
            {
                "dataset_id": "",
                "sample_id": str(uuid.uuid4()),
                "sample_name": "Sample321",
                "last_activity": "",
                "messages": [
                    {
                        "role": "system",
                        "content": "You are a helpful assistant",
                    },
                    {
                        "role": "user",
                        "content": "What's 2 + 2?",
                    },
                    {
                        "role": "assistant",
                        "content": "It's 4",
                    },
                ],
            }
        ],
    }  # type: ignore
