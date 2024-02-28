from fastapi import FastAPI

from cnl_engine.api.controllers import router as api_router

app = FastAPI()

app.include_router(api_router)


# for dev purposes
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
