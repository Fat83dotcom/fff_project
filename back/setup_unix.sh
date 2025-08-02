#!/bin/bash
# Script para configurar ambiente virtual e instalar requirements
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
echo "Ambiente configurado com sucesso!"
