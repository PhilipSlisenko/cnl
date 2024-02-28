import uvicorn
from fastapi import FastAPI

from cnl_engine.api.app import app
from cnl_engine.config import config


def main(host: str = config["host"], port: int = config["port"]):
    uvicorn.run(app, host=host, port=port)


if __name__ == "__main__":
    main()
