from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'


from .models import Student, Module, GradeReport, GradeReportModule

class ModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Module
        fields = '__all__'


class GradeReportModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = GradeReportModule
        fields = '__all__'


class GradeReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = GradeReport
        fields = '__all__'