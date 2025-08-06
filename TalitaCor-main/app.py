from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    temperatura = 22.5
    status = "Tudo funcionando perfeitamente"
    dados_grafico = [10, 12, 8, 15, 9]  # Exemplo simples, pode ser qualquer lista

    return render_template('site.html',
                           temperatura=temperatura,
                           status=status,
                           dados_grafico=dados_grafico)

if __name__ == '__main__':
    app.run(debug=True)
