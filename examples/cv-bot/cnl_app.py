import os
import uuid

from cnl_engine.types.common_types import ChatMessage
from openai import OpenAI
from typing_extensions import List

os.environ["OPENAI_API_KEY"] = "YOUR_OPENAI_API_KEY"


def main(history: List[ChatMessage], meta: dict, cnl_store: dict) -> ChatMessage:
    conversation_history_in_openai_format = [
        (
            {
                "role": "user" if message["from_"] == "user" else "assistant",
                "content": message["content"],
            }
        )
        for message in history
    ]

    prompt_messages = [
        {
            "role": "system",
            "content": "You are a helpful assistant. Your goal is to promote Philip Slisenko. He is an MLOps engineer. Assume he is great. You are talking to a person who might want to hire him.",
        },
        *conversation_history_in_openai_format,
    ]

    client = OpenAI()
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=prompt_messages,  # type: ignore
    )

    content = completion.choices[0].message.content

    dataset_sample = [*prompt_messages, {"role": "assistant", "content": content}]

    return {
        "content": content,
        "dataset_samples": [
            {
                "dataset_id": "",
                "sample_id": str(uuid.uuid4()),
                "sample_name": "Data sample",
                "last_activity": "",
                "messages": dataset_sample,
            }
        ],
    }  # type: ignore
