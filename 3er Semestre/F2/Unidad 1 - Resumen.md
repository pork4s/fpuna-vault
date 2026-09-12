# Unidad 1 - Fuerzas y Campos Eléctricos

---

## 1. Carga Eléctrica

La carga eléctrica es una propiedad fundamental de la materia. Existen dos tipos: **positiva** y **negativa**.

- **Carga elemental:** $e = 1,6 \times 10^{-19} \, C$
- **Cuantización:** $q = \pm ne$ (donde $n = 1, 2, 3, ...$)
- Los **protones** tienen carga $+e$ y los **electrones** tienen carga $-e$
- La carga se conserva: la carga total de un sistema aislado no cambia

---

## 2. Ley de Coulomb

Describe la fuerza de atracción o repulsión entre dos cargas puntuales.

$$F = K \frac{q_1 q_2}{r^2}$$

Donde:
- $K = 9 \times 10^9 \, N \cdot m^2/C^2$ (constante de Coulomb)
- $q_1, q_2$ = magnitud de las cargas
- $r$ = distancia entre las cargas

**Características:**
- Es una fuerza **central** (actúa a lo largo de la línea que une las cargas)
- Es **conservativa** (el trabajo depende solo de los puntos inicial y final)
- Si las cargas son del mismo signo → **repulsión**
- Si las cargas son de distinto signo → **atracción**

---

## 3. Principio de Superposición

Cuando actúan múltiples cargas sobre una carga de prueba, la fuerza resultante es la **suma vectorial** de las fuerzas individuales:

$$\vec{F}_{total} = \vec{F}_1 + \vec{F}_2 + \vec{F}_3 + ...$$

Esto permite calcular fuerzas en sistemas con muchas cargas descomponiéndolas en pares.

---

## 4. Campo Eléctrico

El campo eléctrico es una propiedad del espacio que indica la fuerza que experimentaría una carga positiva unitaria colocada en cada punto.

$$\vec{E} = \frac{\vec{F}}{q}$$

### Campo de una carga puntual:

$$E = K \frac{q}{r^2}$$

**Dirección:**
- Si $q > 0$: el campo apunta **hacia afuera** (radial)
- Si $q < 0$: el campo apunta **hacia adentro** (radial)

### Campo debido a múltiples cargas:

$$\vec{E}_{total} = \vec{E}_1 + \vec{E}_2 + \vec{E}_3 + ...$$

### Fuerza sobre una carga en un campo:

$$\vec{F} = q\vec{E}$$

---

## 5. Líneas de Campo Eléctrico

Son líneas imaginarias que representan visualmente el campo eléctrico:

- Salen de cargas positivas y entran en cargas negativas
- Nunca se cruzan
- La **densidad** de líneas indica la **magnitud** del campo
- Son perpendiculares a las superficies conductoras

---

## 6. Flujo Eléctrico

Mide cuánto campo eléctrico atraviesa una superficie dada.

$$\Phi = \vec{E} \cdot \vec{A} = EA \cos\theta$$

Donde:
- $E$ = magnitud del campo eléctrico
- $A$ = área de la superficie
- $\theta$ = ángulo entre el campo y la normal a la superficie

**Casos especiales:**
- $\theta = 0°$: flujo **máximo** ($\Phi = EA$)
- $\theta = 90°$: flujo **nulo** ($\Phi = 0$)

**Unidad:** $V \cdot m$ o $N \cdot m^2/C$

---

## 7. Ley de Gauss

Una de las ecuaciones fundamentales del electromagnetismo. Relaciona el flujo eléctrico con la carga encerrada.

$$\oint \vec{E} \cdot d\vec{A} = \frac{q_{encerrada}}{\epsilon_0}$$

Donde:
- $\epsilon_0 = 8,85 \times 10^{-12} \, C^2/N \cdot m^2$ (permitividad del vacío)
- $q_{encerrada}$ = carga total dentro de la superficie gaussiana

**Aplicación práctica:**
1. Elegir una superficie gaussiana con simetría adecuada
2. Calcular el flujo a través de ella
3. Igualar con $q_{encerrada}/\epsilon_0$

---

## 8. Densidades de Carga

Cuando la carga está distribuida en un volumen, superficie o línea:

| Tipo | Fórmula | Unidad |
|------|---------|--------|
| **Volumétrica** | $\rho = \frac{Q}{V}$ | $C/m^3$ |
| **Superficial** | $\sigma = \frac{Q}{A}$ | $C/m^2$ |
| **Lineal** | $\lambda = \frac{Q}{l}$ | $C/m$ |

---

## 9. Movimiento de Cargas en Campo Eléctrico

### Trabajo eléctrico:

$$W = \int \vec{F} \cdot d\vec{r} = q \int \vec{E} \cdot d\vec{r}$$

### Energía cinética:

$$T = \frac{1}{2}mv^2$$

### Energía potencial eléctrica:

$$U = K\frac{qQ}{r}$$

**Conservación de energía:**

$$T_i + U_i = T_f + U_f$$

### Análogos con la gravedad:

| Gravedad | Electricidad |
|----------|--------------|
| $F = mg$ | $F = qE$ |
| $U = mgh$ | $U = qV$ |
| Campo uniforme | Campo uniforme |

---

## 10. Campo Eléctrico en Conductores

En **equilibrio electrostático** dentro de un conductor:

- El campo eléctrico interior es **cero**
- Toda la carga reside en la **superficie**
- El campo es **perpendicular** a la superficie
- Los conductores son **equipotenciales**

---

## 11. Material Dieléctrico

Son aislantes que se polarizan al aplicar un campo eléctrico, reduciendo el campo neto.

$$\vec{E}_{neto} = \frac{\vec{E}_0}{K_e}$$

Donde $K_e$ es la **constante dieléctrica** del material ($K_e \geq 1$).

- El vacío tiene $K_e = 1$
- Los dieléctricos se usan en capacitores para aumentar su capacitancia

---

## Tabla Resumen de Fórmulas

| Concepto | Fórmula |
|----------|---------|
| Ley de Coulomb | $F = K\frac{q_1q_2}{r^2}$ |
| Campo eléctrico puntual | $E = K\frac{q}{r^2}$ |
| Flujo eléctrico | $\Phi = EA\cos\theta$ |
| Ley de Gauss | $\oint E \cdot dA = \frac{q}{\epsilon_0}$ |
| Densidad volumétrica | $\rho = \frac{Q}{V}$ |
| Densidad superficial | $\sigma = \frac{Q}{A}$ |
| Densidad lineal | $\lambda = \frac{Q}{l}$ |
| Fuerza en campo | $F = qE$ |
| Energía potencial | $U = K\frac{qQ}{r}$ |

---

## Conceptos Clave para Recordar

1. La carga se **conserva** y es **cuantizada**
2. La fuerza de Coulomb es **conservativa** y sigue la ley del cuadrado inverso
3. El campo eléctrico es una **propiedad del espacio**, no necesita carga de prueba
4. El flujo depende del **ángulo** entre el campo y la superficie
5. La ley de Gauss es especialmente útil por **simetría** (esférica, cilíndrica, plana)
6. En conductores en equilibrio, el campo interior es **cero**
7. Los dieléctricos **reducen** el campo y **aumentan** la capacitancia
