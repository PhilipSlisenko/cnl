# Quick start

1. `pip install -i https://test.pypi.org/simple/ cnl`
2. Create file `cnl_app.py`  
   Copy the following into it:

```python
import uuid

from cnl_engine.types.common_types import ChatMessage
from cnl_engine.utils.utils import zulu_time_now_str


def user_function(history, store, meta) -> ChatMessage:
    return {
        "content": "messge from engine",
        "dataset_samples": [
            {
                "dataset_id": "",
                "sample_id": str(uuid.uuid4()),
                "sample_name": "Sample321",
                "last_activity": zulu_time_now_str(),
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
