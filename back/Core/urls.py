from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StudentViewSet, ModuleViewSet, GradeReportModuleViewSet, GradeReportViewSet

router = DefaultRouter()
router.register(r'students', StudentViewSet)
router.register(r'modules', ModuleViewSet)
router.register(r'grade-reports', GradeReportViewSet)
router.register(r'grade-report-modules', GradeReportModuleViewSet)


urlpatterns = [
    path('', include(router.urls)),
]