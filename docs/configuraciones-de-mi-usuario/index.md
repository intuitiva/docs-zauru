---
title: "Configuraciones de mi usuario"
sidebar_label: "Configuraciones de mi usuario"
sidebar_position: 0
---

En Zauru existen operaciones básicas que todos los usuarios pueden realizar sin necesidad de que involucren permisos.

Estas tareas son:

## API (llamadas desde sistemas externos)

### Obtener perfil del usuario actual
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/profile.json
```

Esto devolverá un JSON con el perfil del usuario y las membresías (entidades/empresas) a las que tiene acceso:

```json
{
  "profile": {
    "id": 1,
    "email": "prueba@zauru.com",
    "name": "Usuario Prueba",
    "language": "es",
    "time_zone": "America/Guatemala"
  },
  "memberships": [
    {
      "id": 1,
      "current": true,
      "active": true,
      "entity": {
        "id": 1,
        "name": "Mi Empresa"
      }
    }
  ]
}
```

### Actualizar perfil del usuario
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PATCH \
  -d '{
    "user": {
      "name": "Usuario Prueba Actualizado",
      "mobile_phone": "55554444",
      "language": "es",
      "time_zone": "America/Guatemala"
    }
  }' \
  https://app.zauru.com/profile.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Obtener datos de la empresa
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/company.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 2,
  "name": "Empresa Ejemplo, S.A.",
  "tin": "1234567-8",
  "currency_id": 1,
  "entity_type_id": 2,
  "industry": "Data Services and hosting",
  "web": "ejemplo.com",
  "notes": "",
  "vat": 0.12,
  "vat_included": true,
  "logo": {
    "url": "http://res.cloudinary.com/hurynnu8i/image/upload/v1484748859/logo2_rgtgpkt22jsgrvyjxcii.png",
    "thumb": {
      "url": "http://res.cloudinary.com/hurynnu8i/image/upload/c_scale,h_50,w_50/v1484748859/logo2_rgtgpkt22jsgrvyjxcii.png"
    },
    "standard": {
      "url": "http://res.cloudinary.com/hurynnu8i/image/upload/c_fit,h_200,w_400/v1484748859/logo2_rgtgpkt22jsgrvyjxcii.png"
    },
    "header": {
      "url": "http://res.cloudinary.com/hurynnu8i/image/upload/c_fit,h_200,w_1000/v1484748859/logo2_rgtgpkt22jsgrvyjxcii.png"
    }
  },
  "logo_2": {
    "url": "http://res.cloudinary.com/hurynnu8i/image/upload/v1362676786/logo2_j9icrsgvsibs0glarjd6.png",
    "thumb": {
      "url": "http://res.cloudinary.com/hurynnu8i/image/upload/c_scale,h_50,w_50/v1362676786/logo2_j9icrsgvsibs0glarjd6.png"
    },
    "standard": {
      "url": "http://res.cloudinary.com/hurynnu8i/image/upload/c_fit,h_200,w_400/v1362676786/logo2_j9icrsgvsibs0glarjd6.png"
    },
    "header": {
      "url": "http://res.cloudinary.com/hurynnu8i/image/upload/c_fit,h_200,w_1000/v1362676786/logo2_j9icrsgvsibs0glarjd6.png"
    }
  },
  "created_at": "2013-01-08T16:54:51.409Z",
  "updated_at": "2026-04-01T22:38:50.647Z",
  "distributor": 1,
  "costing_method": "average",
  "address": "",
  "state": "",
  "city": "",
  "income_tax": 0.05,
  "report_logo": {
    "url": "http://res.cloudinary.com/hurynnu8i/image/upload/v1528307133/logo2_ds8yvmylxn488w85z8am.png",
    "thumb": {
      "url": "http://res.cloudinary.com/hurynnu8i/image/upload/c_scale,h_50,w_50/v1528307133/logo2_ds8yvmylxn488w85z8am.png"
    },
    "standard": {
      "url": "http://res.cloudinary.com/hurynnu8i/image/upload/c_fit,h_200,w_400/v1528307133/logo2_ds8yvmylxn488w85z8am.png"
    },
    "header": {
      "url": "http://res.cloudinary.com/hurynnu8i/image/upload/c_fit,h_200,w_1000/v1528307133/logo2_ds8yvmylxn488w85z8am.png"
    }
  },
  "distributor_contract_id": null,
  "producer_contract_id": null,
  "legal_representative_name": "Representante Legal Ejemplo",
  "legal_representative_identification": "1234 56789 0101",
  "legal_representative_birthday": "1990-01-01",
  "legal_representative_gender": true,
  "legal_representative_marital_status": "casado",
  "legal_representative_occupation": "Administrador Único y Representante Legal ",
  "legal_representative_nationality": "Guatemalteco",
  "exporter_code": "",
  "payee_activity_id": null,
  "taxpayer_registry": "",
  "donation_acceptance_code": "",
  "country_id": 3
}
```

### Cambiar entidad seleccionada
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PATCH \
  -d '{
    "selected_entity_id": "2"
  }' \
  https://app.zauru.com/company.json
```

Esto devolverá un JSON similar a este:
```json
{}
```
