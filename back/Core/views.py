from rest_framework import viewsets
from .models import Student, Module, GradeReport, GradeReportModule
from .serializers import (
    StudentSerializer, ModuleSerializer,
    GradeReportSerializer, GradeReportModuleSerializer
)

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class ModuleViewSet(viewsets.ModelViewSet):
    queryset = Module.objects.all()
    serializer_class = ModuleSerializer


class GradeReportViewSet(viewsets.ModelViewSet):
    queryset = GradeReport.objects.all()
    serializer_class = GradeReportSerializer


class GradeReportModuleViewSet(viewsets.ModelViewSet):
    queryset = GradeReportModule.objects.all()
    serializer_class = GradeReportModuleSerializer