from cnl_engine.types.common_types import ChatMessage


def user_function_process_wrapper(path_to_user_function_file: str) -> ChatMessage:
    history = ""
    store = {}
    meta = ""

    import importlib.util

    spec = importlib.util.spec_from_file_location(
        "module.name", path_to_user_function_file
    )
    foo = importlib.util.module_from_spec(spec)  # type: ignore
    spec.loader.exec_module(foo)  # type: ignore

    reply = foo.user_function(history, store, meta)

    return reply
