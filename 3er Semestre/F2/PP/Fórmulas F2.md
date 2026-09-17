# Resumen de Fórmulas - Física 2

> 📖 [[Sears Zemansky Vol. 2.pdf|Sears Zemansky Vol. 2]]

---

# 🔵 Unidad 1 - Fuerzas y Campos Eléctricos

> [!info] Carga Eléctrica
> - **Carga elemental:** $e = 1,6 \times 10^{-19} \, C$
> - **Cuantización de carga:** $q = \pm ne$ (donde $n = 1, 2, 3, ...$)

> [!tip] Ley de Coulomb
> $$F = K \frac{q_1 q_2}{r^2}$$
> - $K = 9 \times 10^9 \, N \cdot m^2/C^2$
> - **Fuerza entre dos cargas puntuales**

> [!example] Campo Eléctrico
> $$E = K \frac{q}{r^2}$$
> - **Campo eléctrico de una carga puntual**
> - Dirección: radial (hacia afuera si $q > 0$, hacia adentro si $q < 0$)

> [!note] Fuerza sobre carga en campo eléctrico
> $$F = qE$$
> - **Fuerza = carga × campo eléctrico**

> [!cite] Densidades de Carga
> - **Volumétrica:** $\rho = \frac{Q}{V}$ (C/m³)
> - **Superficial:** $\sigma = \frac{Q}{A}$ (C/m²)
> - **Lineal:** $\lambda = \frac{Q}{l}$ (C/m)

> [!note] Demostraciones de Campo Eléctrico

> [!example] Campo eléctrico debido a una línea cargada
> $$E = \frac{\lambda}{2\pi\epsilon_0 r}$$
> - **Demostración:** Se integra $dE = \frac{k dq}{r^2}$ a lo largo de la línea
> - $dq = \lambda dx$, se resuelve por simetría
> - Dirección: radial perpendicular a la línea

> [!example] Campo eléctrico de un anillo uniforme de carga
> $$E = \frac{kQz}{(z^2 + R^2)^{3/2}}$$
> - **Demostración:** Se integra $dE$ sobre el anillo
> - $dq = \lambda R d\theta$, por simetría solo queda la componente axial
> - En el centro ($z = 0$): $E = 0$

> [!example] Campo eléctrico de un disco cargado uniformemente
> $$E = \frac{\sigma}{2\epsilon_0}\left(1 - \frac{z}{\sqrt{z^2 + R^2}}\right)$$
> - **Demostración:** Se integra anillos concéntricos $dE = \frac{kz dq}{(z^2 + r^2)^{3/2}}$
> - $dq = \sigma 2\pi r dr$
> - Plano infinito ($R \to \infty$): $E = \frac{\sigma}{2\epsilon_0}$

> [!question] Flujo Eléctrico
> $$\Phi = E \cdot A = EA \cos\theta$$
> - **Flujo a través de una superficie plana**
> - $\theta$ = ángulo entre $E$ y la normal a la superficie
> - **Flujo neto:** $\Phi_{neto} = \Phi_{entrante} + \Phi_{saliente}$

> [!warning] Ley de Gauss
> $$\oint E \cdot dA = \frac{q}{\epsilon_0}$$
> - $\epsilon_0 = 8,85 \times 10^{-12} \, C^2/N \cdot m^2$
> - **El flujo eléctrico depende solo de la carga encerrada**
> - **Flujo = Campo eléctrico aplicando Ley de Gauss:** $\Phi = \frac{q_{encerrada}}{\epsilon_0}$

> [!note] Demostraciones de Flujo Eléctrico con Ley de Gauss

> [!example] Simetría Esferica (Carga esférica)
> $$E \cdot 4\pi r^2 = \frac{q_{encerrada}}{\epsilon_0} \Rightarrow E = \frac{1}{4\pi\epsilon_0}\frac{q}{r^2}$$
> - Superficie gaussiana: esfera de radio $r$
> - $q_{encerrada} = \rho \cdot \frac{4}{3}\pi r^3$ (si $r < R$)
> - $q_{encerrada} = Q$ (si $r \geq R$)

> [!example] Simetría Cilíndrica (Carga cilíndrica)
> $$E \cdot 2\pi rL = \frac{\lambda L}{\epsilon_0} \Rightarrow E = \frac{\lambda}{2\pi\epsilon_0 r}$$
> - Superficie gaussiana: cilindro de radio $r$ y longitud $L$
> - $q_{encerrada} = \lambda L$
> - Se aplica para conductores infinitos o distribuciones cilíndricas

> [!example] Plano de Carga (Superficie infinita)
> $$E \cdot A = \frac{\sigma A}{\epsilon_0} \Rightarrow E = \frac{\sigma}{\epsilon_0}$$
> - Superficie gaussiana: cilindro que atraviesa el plano
> - $q_{encerrada} = \sigma A$
> - Campo uniforme y perpendicular al plano

> [!important] Movimiento de cargas en campo uniforme
> - **Trabajo:** $W = qV = \Delta E_c$
> - **Energía cinética:** $E_c = \frac{1}{2}mv^2$
> - **Energía potencial eléctrica:** $E_p = K\frac{qQ}{r}$

📄 [[Unidad 1 -Fuerzas y Campos Eléctricos.pdf|Ver PDF Unidad 1]]

---

# 🟢 Unidad 2 - Potencial Eléctrico

> [!info] Potencial Eléctrico (Puntual)
> $$V = K\frac{Q}{r}$$
> - **Potencial debido a una carga puntual**
> - Unidad: Voltios (V) = J/C

> [!tip] Diferencia de Potencial
> $$\Delta V = -\int E \cdot ds$$
> - **Trabajo por unidad de carga**
> - $\Delta V = V_B - V_A$

> [!example] Relación Campo-Potencial
> $$E = -\frac{dV}{ds}$$
> - **El campo eléctrico es el gradiente negativo del potencial**
> - Dirección: de mayor a menor potencial

> [!question] Capacitancia
> $$C = \frac{Q}{V}$$
> - **Capacitancia = carga / diferencia de potencial**
> - Unidad: Faradios (F) = C/V

> [!warning] Capacitor de placas paralelas
> $$C = \frac{\epsilon_0 A}{d}$$
> - $A$ = área de las placas
> - $d$ = distancia entre placas

> [!cite] Energía almacenada en un capacitor
> $$U = \frac{1}{2}CV^2 = \frac{1}{2}QV = \frac{Q^2}{2C}$$
> - **Tres formas equivalentes de calcular la energía**

> [!note] Capacitores en combinación
> - **Serie:** $\frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2} + ...$ → Las cargas Q son iguales
> - **Paralelo:** $C_{eq} = C_1 + C_2 + ...$ → Los voltajes V son iguales

> [!important] Energía de un campo eléctrico
> $$u = \frac{1}{2}\epsilon_0 E^2$$
> - **Densidad de energía (energía por unidad de volumen)**

📄 [[Unidad 2 - Potencial Eléctrico.pdf|Ver PDF Unidad 2]]

---

# 🔴 Unidad 3 - Circuitos de Corriente Continua

> [!info] Ley de Ohm
> $$V = IR$$
> - $V$ = voltaje (V)
> - $I$ = corriente (A)
> - $R$ = resistencia (Ω)

> [!tip] Resistividad y Resistencia
> $$R = \rho \frac{l}{A} = \frac{l}{\sigma A}$$
> - $\rho$ = resistividad (Ω·m)
> - $\sigma$ = conductividad (S/m)
> - $l$ = longitud, $A$ = área

> [!example] Potencia Eléctrica
> $$P = IV = I^2R = \frac{V^2}{R}$$
> - **Tres formas equivalentes de calcular potencia**
> - Unidad: Watts (W) = V·A

> [!question] Resistencias en Serie
> $$R_{eq} = R_1 + R_2 + R_3 + ...$$
> - **La corriente I es la misma en todas**
> - **El voltaje se divide:** $V = V_1 + V_2 + ...$

> [!warning] Resistencias en Paralelo
> $$\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + ...$$
> - **El voltaje V es el mismo en todas**
> - **La corriente se divide:** $I = I_1 + I_2 + ...$

> [!cite] Leyes de Kirchhoff
> - **Ley de Nodos (I):** $\sum I_{entrada} = \sum I_{salida}$
> - **Ley de Mallas (II):** $\sum \varepsilon = \sum IR$

> [!note] FEM y Resistencia Interna
> $$V = \varepsilon - Ir$$
> - $\varepsilon$ = fuerza electromotriz (FEM)
> - $r$ = resistencia interna de la batería

> [!danger] Trabajo y Energía en Circuitos
> - **Trabajo:** $W = qV = ItV$
> - **Energía disipada:** $U = I^2Rt = \frac{V^2}{R}t$
> - **Carga que circula:** $q = It$

📄 [[Unidad 3 - Circuitos de Corriente Continua.pdf|Ver PDF Unidad 3]]

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
| Masa del electrón | $m_e$ | $9,11 \times 10^{-31} \, kg$ |
| Masa del protón | $m_p$ | $1,67 \times 10^{-27} \, kg$ |

---

# 🎯 Fórmulas Rápidas para Exámenes

> [!tip] Unidad 1 - Fuerzas y Campos Eléctricos
> 1. **Coulomb:** $F = K\frac{q_1q_2}{r^2}$
> 2. **Campo eléctrico:** $E = K\frac{q}{r^2}$
> 3. **Flujo eléctrico:** $\Phi = EA\cos\theta$
> 4. **Ley de Gauss:** $\Phi = \frac{q_{encerrada}}{\epsilon_0}$
> 5. **Trabajo:** $W = qV = \Delta E_c$
> 6. **Energía cinética:** $E_c = \frac{1}{2}mv^2$
> 7. **Energía potencial:** $E_p = K\frac{qQ}{r}$

> [!tip] Unidad 2 - Potencial Eléctrico
> 8. **Potencial puntual:** $V = K\frac{Q}{r}$
> 9. **Capacitancia:** $C = \frac{Q}{V}$
> 10. **Capacitor placas paralelas:** $C = \frac{\epsilon_0 A}{d}$
> 11. **Energía capacitor:** $U = \frac{1}{2}CV^2 = \frac{1}{2}QV = \frac{Q^2}{2C}$
> 12. **Capacitores serie:** $\frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2}$ (Q iguales)
> 13. **Capacitores paralelo:** $C_{eq} = C_1 + C_2$ (V iguales)

> [!tip] Unidad 3 - Circuitos
> 14. **Ley de Ohm:** $V = IR$
> 15. **Potencia:** $P = IV = I^2R = \frac{V^2}{R}$
> 16. **Resistencias serie:** $R_{eq} = R_1 + R_2$ (I iguales)
> 17. **Resistencias paralelo:** $\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2}$ (V iguales)
> 18. **Kirchhoff:** $\sum I_{ent} = \sum I_{sal}$ | $\sum \varepsilon = \sum IR$
