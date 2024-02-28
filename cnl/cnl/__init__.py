import multiprocessing

from cnl_engine.main import main as cnl_engine_main
from cnl_front.main import main as cnl_front_main
from cnl_local.main import main as cnl_local_main


def cnl_run(module_path: str):
    # prepare fs
    # run main of engine
    process = multiprocessing.Process(
        target=cnl_engine_main, kwargs={"path_to_module": module_path}
    )
    process.start()
    # run main of cnl local
    process = multiprocessing.Process(target=cnl_local_main)
    process.start()
    # run main of front
    process = multiprocessing.Process(target=cnl_front_main)
    process.start()
