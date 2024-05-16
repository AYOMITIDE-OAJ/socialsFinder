import os
from typing import List
from dotenv import load_dotenv
from pydantic_settings import BaseSettings


load_dotenv()


class Settings(BaseSettings):
    """Global settings for the app."""

    ENV: str = os.environ.get("ENV", "DEV")
    BACKEND_CORS_ORIGINS: List[str] = []
    DOMAIN: str = "https://socialsfinderwrapper.onrender.com/"
    EMAILS_ENABLED: bool = True
    PROJECT_NAME: str = "SocialsFinder"
    API_V1_STR: str = "/api/v1"

    class Config:
        case_sensitive = True


settings = Settings()
