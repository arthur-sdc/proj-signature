const express = require('express');
const path = require('path');

const app = express();
const PORT = 80; // Porta de acesso na rede

// Servir arquivos estáticos da pasta "public"
app.use('/gerador-de-assinatura', express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando! Acesse: http://${getLocalIP()}/gerador-de-assinatura`);
});

// Função para obter o IP local automaticamente
function getLocalIP() {
    const os = require('os');
    const interfaces = os.networkInterfaces();
    for (const iface of Object.values(interfaces)) {
        for (const config of iface) {
            if (config.family === 'IPv4' && !config.internal) {
                return config.address;
            }
        }
    }
    return 'localhost';
}
