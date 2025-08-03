from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100, unique=True)
    address = models.CharField(max_length=255)
    birthdate = models.DateField()

    def __str__(self):
        return self.name


class Module(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class GradeReport(models.Model):
    student = models.ForeignKey(to='Student', on_delete=models.CASCADE)
    module = models.ManyToManyField('Module', through='GradeReportModule')
    academic_year = models.CharField(max_length=4)
    semester = models.CharField(choices=[
        ('1', '1st Semester'),
        ('2', '2nd Semester'),
    ])
    def __str__(self):
        return self.student.name


class GradeReportModule(models.Model):
    grade_report = models.ForeignKey('GradeReport', on_delete=models.CASCADE)
    module = models.ForeignKey('Module', on_delete=models.CASCADE)
    grade = models.FloatField()