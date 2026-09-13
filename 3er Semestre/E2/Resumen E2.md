# 📊 Resumen de Inferencia Estadística

> **Tema:** Estimación por intervalos y pruebas de hipótesis
> **Fuentes:** Walpole Probabilidad y Estadística, apuntes de clase

---

# 🔵 MUESTRAS GRANDES (n ≥ 30)

## 1.1 Intervalo de Confianza para la Media (σ conocida)

$$\bar{x} \pm z_{\alpha/2} \cdot \frac{\sigma}{\sqrt{n}}$$

| Componente | Descripción |
|------------|-------------|
| $\bar{x}$ | Media muestral |
| $z_{\alpha/2}$ | Valor crítico de la distribución normal |
| $\sigma$ | Desviación estándar poblacional |
| $n$ | Tamaño de muestra |

> 📘 **Explicación:** Cuando la muestra es grande (n ≥ 30), por el **Teorema Central del Límite**, la distribución muestral de la media se aproxima a una normal, aunque la población no lo sea.

---

## 1.2 Intervalo de Confianza para la Media (σ desconocida)

$$\bar{x} \pm z_{\alpha/2} \cdot \frac{s}{\sqrt{n}}$$

| Componente | Descripción |
|------------|-------------|
| $s$ | Desviación estándar muestral (reemplaza a σ) |

> 📘 **Explicación:** Al ser grandes las muestras, se usa $s$ como estimación de $\sigma$ y se aplica la distribución normal (z).

---

## 1.3 Prueba de Hipótesis para la Media (σ conocida)

**Hipótesis:**
- $H_0: \mu = \mu_0$
- $H_1: \mu \neq \mu_0$ (bilateral) / $\mu > \mu_0$ / $\mu < \mu_0$

**Estadístico de prueba:**

$$z = \frac{\bar{x} - \mu_0}{\sigma / \sqrt{n}}$$

> 📘 **Regla de decisión:** Rechazar $H_0$ si $|z| > z_{\alpha/2}$

---

## 1.4 Diferencia de Medias (Muestras Grandes Independientes)

### Intervalo de Confianza

$$(\bar{x}_1 - \bar{x}_2) \pm z_{\alpha/2} \cdot \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}$$

**Si σ es desconocida pero n es grande:**

$$(\bar{x}_1 - \bar{x}_2) \pm z_{\alpha/2} \cdot \sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}$$

### Estadístico de prueba

$$z = \frac{(\bar{x}_1 - \bar{x}_2) - (\mu_1 - \mu_2)}{\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}}$$

> 📘 **Explicación:** Se compara si hay diferencia significativa entre las medias de dos poblaciones independientes. Con muestras grandes, se utiliza la distribución normal.

---

## 1.5 Diferencia de Medias (Muestras Grandes Dependientes / Emparejadas)

$$\bar{d} \pm z_{\alpha/2} \cdot \frac{s_d}{\sqrt{n}}$$

Donde $d_i = x_{1i} - x_{2i}$ (diferencias individuales)

> 📘 **Explicación:** Se aplica cuando las muestras están relacionadas (antes-después, pares gemelos, etc.). Se trabaja con las diferencias individuales.

---

# 🟠 MUESTRAS PEQUEÑAS (n < 30)

## 2.1 Intervalo de Confianza para la Media

$$\bar{x} \pm t_{\alpha/2, \nu} \cdot \frac{s}{\sqrt{n}}$$

| Componente | Descripción |
|------------|-------------|
| $t_{\alpha/2, \nu}$ | Valor crítico de distribución t de Student |
| $\nu = n - 1$ | Grados de libertad |

> 📘 **Explicación:** Con muestras pequeñas y σ desconocida, se usa la distribución **t de Student** que tiene colas más pesadas que la normal, compensando la incertidumbre por la pequeña muestra.

**Supuestos:**
- Población normal o aproximadamente normal
- Observaciones independientes
- σ desconocida

---

## 2.2 Prueba de Hipótesis para la Media

$$t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}}$$

**Grados de libertad:** $\nu = n - 1$

> 📘 **Regla de decisión:** Rechazar $H_0$ si $|t| > t_{\alpha/2, \nu}$

---

## 2.3 Diferencia de Medias (Muestras Pequeñas Independientes)

### Intervalo de Confianza (varianzas iguales - pooled)

$$(\bar{x}_1 - \bar{x}_2) \pm t_{\alpha/2, \nu} \cdot s_p \cdot \sqrt{\frac{1}{n_1} + \frac{1}{n_2}}$$

Donde la **varianza agrupada** es:

$$s_p^2 = \frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1 + n_2 - 2}$$

**Grados de libertad:** $\nu = n_1 + n_2 - 2$

### Intervalo de Confianza (varianzas desiguales - Welch)

$$(\bar{x}_1 - \bar{x}_2) \pm t_{\alpha/2, \nu} \cdot \sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}$$

**Grados de libertad (aproximación de Welch):**

$$\nu = \frac{\left(\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}\right)^2}{\frac{(s_1^2/n_1)^2}{n_1-1} + \frac{(s_2^2/n_2)^2}{n_2-1}}$$

> 📘 **Explicación:** Con muestras pequeñas se usa t de Student. Se debe verificar si las varianzas son iguales (prueba F) para elegir entre el método pooled o Welch.

---

## 2.4 Diferencia de Medias (Muestras Pequeñas Dependientes)

$$\bar{d} \pm t_{\alpha/2, \nu} \cdot \frac{s_d}{\sqrt{n}}$$

| Componente | Descripción |
|------------|-------------|
| $\bar{d}$ | Media de las diferencias |
| $s_d$ | Desviación estándar de las diferencias |
| $\nu = n - 1$ | Grados de libertad |

> 📘 **Explicación:** Similar al caso de muestras grandes dependientes, pero usando t de Student por el tamaño reducido de muestra.

---

# 🟢 PROPORCIONES

## 3.1 Intervalo de Confianza para una Proporción

$$\hat{p} \pm z_{\alpha/2} \cdot \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$$

| Componente | Descripción |
|------------|-------------|
| $\hat{p} = x/n$ | Proporción muestral |
| $x$ | Número de éxitos en la muestra |

> 📘 **Condiciones de uso:**
> - $n\hat{p} \geq 5$ y $n(1-\hat{p}) \geq 5$
> - Muestra aleatoria simple

> 📘 **Explicación:** La distribución muestral de proporciones se aproxima a una normal por el TCL cuando las condiciones se cumplen.

---

## 3.2 Prueba de Hipótesis para una Proporción

**Hipótesis:**
- $H_0: p = p_0$
- $H_1: p \neq p_0$

**Estadístico de prueba:**

$$z = \frac{\hat{p} - p_0}{\sqrt{\frac{p_0(1-p_0)}{n}}}$$

> 📘 **Nota:** En $H_0$ se usa $p_0$ (proporción hipotética), no $\hat{p}$.

---

## 3.3 Tamaño de Muestra para Proporción

$$n = \frac{z_{\alpha/2}^2 \cdot p(1-p)}{E^2}$$

Donde $E$ es el margen de error deseado.

> 📘 **Si no se conoce $p$:** Se usa $p = 0.5$ (máxima variabilidad).

---

## 3.4 Diferencia de Proporciones

### Intervalo de Confianza

$$(\hat{p}_1 - \hat{p}_2) \pm z_{\alpha/2} \cdot \sqrt{\frac{\hat{p}_1(1-\hat{p}_1)}{n_1} + \frac{\hat{p}_2(1-\hat{p}_2)}{n_2}}$$

### Prueba de Hipótesis

**$H_0: p_1 = p_2$** (o $p_1 - p_2 = 0$)

**Estadístico de prueba (bajo $H_0$):**

$$z = \frac{\hat{p}_1 - \hat{p}_2}{\sqrt{\hat{p}(1-\hat{p}) \left(\frac{1}{n_1} + \frac{1}{n_2}\right)}}$$

Donde la **proporción agrupada** es:

$$\hat{p} = \frac{x_1 + x_2}{n_1 + n_2}$$

> 📘 **Condiciones de uso:**
> - $n_1\hat{p}_1 \geq 5$, $n_1(1-\hat{p}_1) \geq 5$
> - $n_2\hat{p}_2 \geq 5$, $n_2(1-\hat{p}_2) \geq 5$
> - Muestras independientes

> 📘 **Explicación:** Se compara si dos proporciones poblacionales son significativamente diferentes. Se usa proporción agrupada en la prueba de hipótesis porque bajo $H_0$ ambas proporciones son iguales.

---

# 📋 TABLA RESUMEN COMPARATIVA

| Situación | Distribución | Fórmula General |
|-----------|--------------|-----------------|
| Media grande, σ conocida | Normal (z) | $\bar{x} \pm z \cdot \frac{\sigma}{\sqrt{n}}$ |
| Media grande, σ desconocida | Normal (z) | $\bar{x} \pm z \cdot \frac{s}{\sqrt{n}}$ |
| Media pequeña, σ desconocida | t Student | $\bar{x} \pm t \cdot \frac{s}{\sqrt{n}}$ |
| Diferencia medias grandes | Normal (z) | $(\bar{x}_1-\bar{x}_2) \pm z \cdot \sqrt{\frac{s_1^2}{n_1}+\frac{s_2^2}{n_2}}$ |
| Diferencia medias pequeñas | t Student | $(\bar{x}_1-\bar{x}_2) \pm t \cdot s_p\sqrt{\frac{1}{n_1}+\frac{1}{n_2}}$ |
| Proporción | Normal (z) | $\hat{p} \pm z \cdot \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$ |
| Diferencia proporciones | Normal (z) | $(\hat{p}_1-\hat{p}_2) \pm z \cdot \sqrt{\frac{\hat{p}_1\hat{q}_1}{n_1}+\frac{\hat{p}_2\hat{q}_2}{n_2}}$ |

---

# 🎯 GUÍA RÁPIDA: ¿Cuándo uso cada distribución?

```
¿Muestra grande (n ≥ 30)?
├── SÍ → Usar Normal (z)
│   ├── σ conocida → z con σ
│   └── σ desconocida → z con s
└── NO (n < 30)
    ├── ¿Población normal?
    │   ├── SÍ → Usar t de Student
    │   └── NO → Buscar alternativa no paramétrica
    └── Verificar supuestos antes de aplicar
```

---

*Nota: Este resumen está basado en los temas del curso de Estadística Inferencial del 3er Semestre.*
