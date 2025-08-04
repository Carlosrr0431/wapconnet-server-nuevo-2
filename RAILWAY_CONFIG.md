# Railway Private Network Configuration

Este proyecto ha sido configurado para usar la red privada de Railway para optimizar recursos y mejorar la seguridad.

## Configuración de Red Privada

### URL Interna Principal
- **URL interna**: `wapconnet-server-nuevo-2.railway.internal`
- **Puerto**: `21465`

### Cambios Realizados

1. **Config Principal** (`src/config.ts`):
   - Host cambiado de `localhost` a `wapconnet-server-nuevo-2.railway.internal`
   - Redis host configurado para usar la red privada

2. **Swagger Documentation** (`src/swagger-backup.json`):
   - URLs actualizadas para usar la red privada de Railway

### Variables de Entorno Recomendadas

Para Railway, configura las siguientes variables de entorno:

```bash
# Red Privada
RAILWAY_PRIVATE_DOMAIN=wapconnet-server-nuevo-2.railway.internal
PORT=21465

# Base de Datos
REDIS_URL=redis://wapconnet-server-nuevo-2.railway.internal:6379
MONGODB_URL=mongodb://wapconnet-server-nuevo-2.railway.internal:27017/tokens

# Webhooks (si usas servicios internos)
WEBHOOK_URL=http://wapconnet-server-nuevo-2.railway.internal:21465/webhook
```

### Beneficios de la Red Privada

1. **Ahorro de Ancho de Banda**: Las comunicaciones internas no consumen ancho de banda externo
2. **Mejor Latencia**: Comunicación directa entre servicios
3. **Mayor Seguridad**: Tráfico interno no expuesto a internet
4. **Optimización de Costos**: Reduce el uso de recursos facturables

### Configuración Manual Adicional

Si necesitas configurar servicios adicionales para usar la red privada:

1. **ChatWoot**: `CHATWOOT_BASE_URL=http://wapconnet-server-nuevo-2.railway.internal:3000`
2. **Webhooks Internos**: Usar `wapconnet-server-nuevo-2.railway.internal` en lugar de URLs públicas
3. **APIs Internas**: Reemplazar cualquier llamada localhost/127.0.0.1 con la URL interna

### Testing

Para verificar que la configuración funciona:

1. Despliega en Railway
2. Verifica los logs del servidor para confirmar que está usando las URLs internas
3. Prueba las conexiones WebSocket y REST API
4. Confirma que los servicios como Redis se conectan correctamente

### Notas Importantes

- La red privada de Railway solo funciona entre servicios desplegados en Railway
- Para desarrollo local, mantén las configuraciones localhost
- Asegúrate de que todos los servicios dependientes también estén configurados para usar la red privada
