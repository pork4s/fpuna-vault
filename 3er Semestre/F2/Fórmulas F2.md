# Resumen de Fórmulas - Física 2

---

# 🔵 Unidad 1 - Fuerzas y Campos Eléctricos

> [!info]- Carga Eléctrica
> - **Carga elemental:** $e = 1,6 \times 10^{-19} \, C$
> - **Cuantización de carga:** $q = \pm ne$ (donde $n = 1, 2, 3, ...$)

> [!tip]- Ley de Coulomb
> $$F = K \frac{q_1 q_2}{r^2}$$
> - $K = 9 \times 10^9 \, N \cdot m^2/C^2$
> - **Fuerza entre dos cargas puntuales**

> [!example]- Campo Eléctrico
> $$E = K \frac{q}{r^2}$$
> - **Campo eléctrico de una carga puntual**
> - Dirección: radial (hacia afuera si $q > 0$, hacia adentro si $q < 0$)

> [!question]- Flujo Eléctrico
> $$\Phi = E \cdot A = EA \cos\theta$$
> - **Flujo a través de una superficie plana**
> - $\theta$ = ángulo entre $E$ y la normal a la superficie

> [!warning]- Ley de Gauss
> $$\oint E \cdot dA = \frac{q}{\epsilon_0}$$
> - $\epsilon_0 = 8,85 \times 10^{-12} \, C^2/N \cdot m^2$
> - **El flujo eléctrico depende solo de la carga encerrada**

> [!cite]- Densidades de Carga
> - **Volumétrica:** $\rho = \frac{Q}{V}$ (C/m³)
> - **Superficial:** $\sigma = \frac{Q}{A}$ (C/m²)
> - **Lineal:** $\lambda = \frac{Q}{l}$ (C/m)

> [!note]- Fuerza sobre carga en campo eléctrico
> $$F = qE$$
> - **Fuerza = carga × campo eléctrico**

> [!important]- Movimiento de cargas en campo uniforme
> - **Trabajo:** $W = \int F \cdot dr$
> - **Energía cinética:** $T = \frac{1}{2}mv^2$
> - **Energía potencial eléctrica:** $U = K\frac{qQ}{r}$

---

# 🟢 Unidad 2 - Potencial Eléctrico

> [!info]- Potencial Eléctrico (Puntual)
> $$V = K\frac{Q}{r}$$
> - **Potencial debido a una carga puntual**
> - Unidad: Voltios (V) = J/C

> [!tip]- Diferencia de Potencial
> $$\Delta V = -\int E \cdot ds$$
> - **Trabajo por unidad de carga**
> - $\Delta V = V_B - V_A$

> [!example]- Relación Campo-Potencial
> $$E = -\frac{dV}{ds}$$
> - **El campo eléctrico es el gradiente negativo del potencial**
> - Dirección: de mayor a menor potencial

> [!question]- Capacitancia
> $$C = \frac{Q}{V}$$
> - **Capacitancia = carga / diferencia de potencial**
> - Unidad: Faradios (F) = C/V

> [!warning]- Capacitor de placas paralelas
> $$C = \frac{\epsilon_0 A}{d}$$
> - $A$ = área de las placas
> - $d$ = distancia entre placas

> [!cite]- Energía almacenada en un capacitor
> $$U = \frac{1}{2}CV^2 = \frac{1}{2}QV = \frac{Q^2}{2C}$$
> - **Tres formas equivalentes de calcular la energía**

> [!note]- Capacitores en combinación
> - **Serie:** $\frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2} + ...$
> - **Paralelo:** $C_{eq} = C_1 + C_2 + ...$

> [!important]- Energía de un campo eléctrico
> $$u = \frac{1}{2}\epsilon_0 E^2$$
> - **Densidad de energía (energía por unidad de volumen)**

---

# 🔴 Unidad 3 - Circuitos de Corriente Continua

> [!info]- Ley de Ohm
> $$V = IR$$
> - $V$ = voltaje (V)
> - $I$ = corriente (A)
> - $R$ = resistencia (Ω)

> [!tip]- Resistividad y Resistencia
> $$R = \rho \frac{l}{A} = \frac{l}{\sigma A}$$
> - $\rho$ = resistividad (Ω·m)
> - $\sigma$ = conductividad (S/m)
> - $l$ = longitud, $A$ = área

> [!example]- Potencia Eléctrica
> $$P = IV = I^2R = \frac{V^2}{R}$$
> - **Tres formas equivalentes de calcular potencia**
> - Unidad: Watts (W) = V·A

> [!question]- Resistencias en Serie
> $$R_{eq} = R_1 + R_2 + R_3 + ...$$
> - **La corriente es la misma en todas**
> - **El voltaje se divide:** $V = V_1 + V_2 + ...$

> [!warning]- Resistencias en Paralelo
> $$\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + ...$$
> - **El voltaje es el mismo en todas**
> - **La corriente se divide:** $I = I_1 + I_2 + ...$

> [!cite]- Leyes de Kirchhoff
> - **Ley de Nodos (I):** $\sum I_{entrada} = \sum I_{salida}$
> - **Ley de Mallas (II):** $\sum \varepsilon = \sum IR$

> [!note]- FEM y Resistencia Interna
> $$V = \varepsilon - Ir$$
> - $\varepsilon$ = fuerza electromotriz (FEM)
> - $r$ = resistencia interna de la batería

> [!important]- Circuito RC - Carga y Descarga
> - **Constante de tiempo:** $\tau = RC$
> - **Carga:** $q = Q_f(1 - e^{-t/RC})$
> - **Descarga:** $q = Q_0 e^{-t/RC}$
> - **Corriente:** $i = I_0 e^{-t/RC}$

> [!danger]- Trabajo y Energía en Circuitos
> - **Trabajo:** $W = qV = ItV$
> - **Energía disipada:** $U = I^2Rt = \frac{V^2}{R}t$
> - **Carga que circula:** $q = It$

---

# 📐 Constantes y Datos Útiles

| Constante | Símbolo | Valor |
|-----------|---------|-------|
| Carga elemental | $e$ | $1,6 \times 10^{-19} \, C$ |
| Permitividad del vacío | $\epsilon_0$ | $8,85 \times 10^{-12} \, C^2/N \cdot m^2$ |
| Constante de Coulomb | $K$ | $9 \times 10^9 \, N \cdot m^2/C^2$ |
| Carga de un protón | $+e$ | $1,6 \times 10^{-19} \, C$ |
| Carga de un electrón | $-e$ | $-1,6 \times 10^{-19} \, C$ |
| Conductividad del cobre | $\sigma_{Cu}$ | $5,8 \times 10^7 \, S/m$ |

---

# 🎯 Fórmulas Rápidas para Exámenes

> [!tip] Resumen Express
> 1. **Coulomb:** $F = K\frac{q_1q_2}{r^2}$
> 2. **Campo:** $E = K\frac{q}{r^2}$
> 3. **Potencial:** $V = K\frac{Q}{r}$
> 4. **Capacitancia:** $C = \frac{Q}{V}$
> 5. **Ohm:** $V = IR$
> 6. **Potencia:** $P = IV$
> 7. **Serie:** $R_{eq} = R_1 + R_2$
> 8. **Paralelo:** $\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2}$
