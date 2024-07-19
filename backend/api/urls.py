from django.urls import include, path
from rest_framework.routers import DefaultRouter
from api import views

router = DefaultRouter()
router.register(r'gardens', views.GardenViewSet)
router.register(r'plants', views.PlantViewSet)
router.register(r'comments', views.CommentViewSet)

urlpatterns = [
    path('', include(router.urls)),
]