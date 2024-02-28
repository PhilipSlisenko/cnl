from cnl_local.db.engine_session import engine
from cnl_local.db.models._base import Base  # Import base
from cnl_local.db.models.dataset import Dataset  # Import all models
from cnl_local.db.models.sample import Sample


def create_tables():
    Base.metadata.drop_all(engine)

    # Importing the models is essential for create_all to recognize them
    Base.metadata.create_all(engine)
