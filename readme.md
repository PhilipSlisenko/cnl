# Quick start

1. `pip install cnl`
2. Create file `cnl_app.py`  
   Copy the following into it:

```python
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
```

3. Run `cnl_run cnl_app.py`

# Telegram deployment

1. Create file `cnl_config.py`  
   Copy the following into it (and modify with your own [telegram bot api key](https://core.telegram.org/bots/tutorial#obtain-your-bot-token)):

```python
config = {
    "telegram": {
        "api_key": "4839574812:AAFD39kkdpWt3ywyRZergyOLMaJhac60qc"
    }
}

```

2. Run `cnl_run cnl_app.py cnl_config.py`

# Fine-tuning

https://platform.openai.com/docs/guides/fine-tuning/preparing-your-dataset
