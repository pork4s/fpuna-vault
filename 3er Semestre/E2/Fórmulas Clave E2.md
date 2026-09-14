# Fórmulas Clave - Estadística Inferencial

---

## 1. Regla Empírica (68-95-99.7)

Para distribuciones **normales**:

| Intervalo | % de datos |
|-----------|------------|
| $\mu \pm 1\sigma$ | 68% |
| $\mu \pm 2\sigma$ | 95% |
| $\mu \pm 3\sigma$ | 99.7% |

> 📘 Solo aplica a distribuciones normales.

---

## 2. Teorema del Límite Central

La distribución muestral de $\bar{x}$ se aproxima a una normal cuando $n$ es grande:

$$\bar{x} \sim N\left(\mu, \frac{\sigma^2}{n}\right)$$

> 📘 Incluso si la población no es normal, con $n \geq 30$ la media muestral se distribuye aproximadamente normal.

---

## 3. Teorema de Chebyshev

Para **cualquier** distribución (no necesita normalidad):

$$P(|x - \mu| < k\sigma) \geq 1 - \frac{1}{k^2}$$

| $k$ | Mínimo % de datos |
|-----|-------------------|
| 2 | 75% |
| 3 | 88.9% |

> 📘 Útil cuando no se conoce la forma de la distribución. Es más conservador que la regla empírica.

---

## 4. Z para la Media ($\sigma$ conocido)

$$z = \frac{\bar{x} - \mu}{\sigma / \sqrt{n}}$$

**IC:** $\bar{x} \pm z_{\alpha/2} \cdot \frac{\sigma}{\sqrt{n}}$

> 📘 Se usa cuando $\sigma$ es conocida y $n \geq 30$.

---

## 5. Z para Diferencia de Medias (Muestras Grandes Independientes)

$$z = \frac{(\bar{x}_1 - \bar{x}_2) - (\mu_1 - \mu_2)}{\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}}$$

**IC:** $(\bar{x}_1 - \bar{x}_2) \pm z_{\alpha/2} \cdot \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}$

> 📘 Ambas muestras grandes ($n_1, n_2 \geq 30$) e independientes.

---

## 6. T para Prueba de Hipótesis de la Media

$$t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}}$$

**Grados de libertad:** $\nu = n - 1$

> 📘 Se usa cuando $\sigma$ es desconocida y $n < 30$. Se requiere población normal.

---

## 7. Varianza Agrupada $s_p^2$ (Muestras Pequeñas Independientes)

$$s_p^2 = \frac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2}$$

> 📘 Se usa como estimación conjunta de la varianza cuando se asumen varianzas iguales entre ambas poblaciones.

---

## 8. T para Diferencia de Medias (Muestras Pequeñas Independientes)

$$t = \frac{(\bar{x}_1 - \bar{x}_2) - (\mu_1 - \mu_2)}{s_p \cdot \sqrt{\frac{1}{n_1} + \frac{1}{n_2}}}$$

**IC:** $(\bar{x}_1 - \bar{x}_2) \pm t_{\alpha/2, \nu} \cdot s_p \cdot \sqrt{\frac{1}{n_1} + \frac{1}{n_2}}$

**Grados de libertad:** $\nu = n_1 + n_2 - 2$

> 📘 Ambas muestras pequeñas ($n_1, n_2 < 30$), independientes y con varianzas iguales.

---

## 9. Z para Prueba de Hipótesis de una Proporción

$$z = \frac{\hat{p} - p_0}{\sqrt{\frac{p_0(1 - p_0)}{n}}}$$

**IC:** $\hat{p} \pm z_{\alpha/2} \cdot \sqrt{\frac{\hat{p}(1 - \hat{p})}{n}}$

> 📘 Se usa cuando $np \geq 5$ y $n(1-p) \geq 5$.

---

## 10. Z para Diferencia de Proporciones

$$z = \frac{(\hat{p}_1 - \hat{p}_2) - (p_1 - p_2)}{\sqrt{\frac{\hat{p}_1(1 - \hat{p}_1)}{n_1} + \frac{\hat{p}_2(1 - \hat{p}_2)}{n_2}}}$$

**IC:** $(\hat{p}_1 - \hat{p}_2) \pm z_{\alpha/2} \cdot \sqrt{\frac{\hat{p}_1(1 - \hat{p}_1)}{n_1} + \frac{\hat{p}_2(1 - \hat{p}_2)}{n_2}}$

> 📘 Ambas muestras grandes e independientes.

---

## 11. Valor p (p-value)

Probabilidad de obtener un resultado igual o más extremo que el observado, asumiendo que $H_0$ es verdadera.

**Regla de decisión:**
- Si $p \leq \alpha$ → Rechazar $H_0$
- Si $p > \alpha$ → No rechazar $H_0$

> 📘 Mide la evidencia contra $H_0$. A menor p, mayor evidencia para rechazar.

---

# Tabla Resumen Comparativa

| Distribución | Fórmula clave | Cuándo se usa |
|---|---|---|
| Z (media) | $z = \frac{\bar{x} - \mu}{\sigma / \sqrt{n}}$ | $\sigma$ conocida, $n \geq 30$ |
| Z (diferencia de medias) | $z = \frac{(\bar{x}_1 - \bar{x}_2)}{\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}}$ | Muestras grandes independientes |
| T (media) | $t = \frac{\bar{x} - \mu}{s / \sqrt{n}}$ | $\sigma$ desconocida, $n < 30$ |
| T (diferencia de medias) | $t = \frac{(\bar{x}_1 - \bar{x}_2)}{s_p \sqrt{\frac{1}{n_1} + \frac{1}{n_2}}}$ | Muestras pequeñas independientes, varianzas iguales |
| Z (proporción) | $z = \frac{\hat{p} - p_0}{\sqrt{\frac{p_0(1-p_0)}{n}}}$ | $np \geq 5$, $n(1-p) \geq 5$ |
| Z (diferencia de proporciones) | $z = \frac{(\hat{p}_1 - \hat{p}_2)}{\sqrt{\frac{\hat{p}_1 q_1}{n_1} + \frac{\hat{p}_2 q_2}{n_2}}}$ | Muestras grandes independientes |

---

# Guía Rápida: ¿Qué distribución usar?

```
¿Qué estás analizando?
│
├─ MEDIA
│   ├─ ¿σ conocida?
│   │   ├─ SÍ → ¿n ≥ 30?
│   │   │   ├─ SÍ → Z
│   │   │   └─ NO → Z (asumiendo normalidad)
│   │   └─ NO → T (n < 30, población normal)
│   │
│   └─ DOS MEDIAS (independientes)
│       ├─ ¿Ambas n ≥ 30?
│       │   ├─ SÍ → Z
│       │   └─ NO → T con sp² (varianzas iguales)
│       └─ ¿Dependientes? → T pareada
│
├─ PROPORCIÓN
│   ├─ UNA proporción → Z
│   └─ DOS proporciones → Z
│
└─ ¿Distribución desconocida?
    ├─ Regla empírica (normal, % exactos)
    └─ Chebyshev (cualquier dist, % mínimos)
```
