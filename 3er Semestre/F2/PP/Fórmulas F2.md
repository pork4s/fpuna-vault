# Resumen de Fórmulas - Física 2

> 📖 [[Sears Zemansky Vol. 2.pdf|Sears Zemansky Vol. 2]]

---

> [!note]- 📑 Índice
> ### [[#Unidad 1 - Fuerzas y Campos Eléctricos]]
> - [[#Carga Eléctrica]]
> - [[#Ley de Coulomb]]
> - [[#Campo Eléctrico]]
> - [[#Fuerza sobre carga en campo eléctrico]]
> - [[#Densidades de Carga]]
> - [[#Campo eléctrico de una línea cargada]]
> - [[#Campo eléctrico de un anillo uniforme de carga]]
> - [[#Campo eléctrico de una semicircunferencia cargada]]
> - [[#Campo eléctrico de un disco cargado uniformemente]]
> - [[#Flujo Eléctrico]]
> - [[#Ley de Gauss]]
> - [[#Simetría Esférica]]
> - [[#Simetría Cilíndrica]]
> - [[#Plano de Carga]]
> - [[#Movimiento de cargas en campo uniforme]]
>
> ### [[#Unidad 2 - Potencial Eléctrico]]
> - [[#Potencial Eléctrico (Puntual)]]
> - [[#Diferencia de Potencial]]
> - [[#Relación Campo-Potencial]]
> - [[#Capacitancia]]
> - [[#Capacitor de placas paralelas]]
> - [[#Capacitores en combinación]]
> - [[#Energía almacenada en un capacitor]]
> - [[#Energía de un campo eléctrico]]
> - [[#Dieléctricos]]
>
> ### [[#Unidad 3 - Circuitos de Corriente Continua]]
> - [[#Ley de Ohm]]
> - [[#Resistividad y Resistencia]]
> - [[#Potencia Eléctrica]]
> - [[#Resistencias en Serie]]
> - [[#Resistencias en Paralelo]]
> - [[#Leyes de Kirchhoff]]
> - [[#FEM y Resistencia Interna]]
> - [[#Trabajo y Energía en Circuitos]]
>
> ### [[#Constantes y Datos Útiles]]
> ### [[#Fórmulas Rápidas para Exámenes]]

---

# 🔵 Unidad 1 - Fuerzas y Campos Eléctricos

### <span style="color:#086ddd">Carga Eléctrica</span>
> [!info]
> - **Carga elemental:** $e = 1,6 \times 10^{-19} \, C$
> - **Cuantización de carga:** $q = \pm ne$ (donde $n = 1, 2, 3, ...$)

### <span style="color:#00bfbc">Ley de Coulomb</span>
> [!tip]
> $$F = K \frac{q_1 q_2}{r^2} \quad \text{(N)}$$
> - $K = 9 \times 10^9 \, N \cdot m^2/C^2$
> - **Fuerza entre dos cargas puntuales**

### <span style="color:#7852ee">Campo Eléctrico</span>
> [!example]
> $$E = K \frac{q}{r^2} \quad \text{(N/C o V/m)}$$
> - **Campo eléctrico de una carga puntual**
> - Dirección: radial (hacia afuera si $q > 0$, hacia adentro si $q < 0$)

### <span style="color:#086ddd">Fuerza sobre carga en campo eléctrico</span>
> [!note]
> $$F = qE \quad \text{(N)}$$
> - **Fuerza = carga × campo eléctrico**
> - **Relación de dirección:**
>   - Si $q > 0$ (positiva): $F$ y $E$ apuntan en **el mismo sentido**
>   - Si $q < 0$ (negativa): $F$ y $E$ apuntan en **sentido contrario**

### <span style="color:#9e9e9e">Densidades de Carga</span>
> [!cite]
> - **Volumétrica:** $\rho = \frac{Q}{V}$ (C/m³)
> - **Superficial:** $\sigma = \frac{Q}{A}$ (C/m²)
> - **Lineal:** $\lambda = \frac{Q}{l}$ (C/m)

### <span style="color:#7852ee">Campo eléctrico de una línea cargada</span>
> [!example]
> $$E = \frac{\lambda}{2\pi\epsilon_0 r} \quad \text{(N/C o V/m)}$$
> - **Demostración:** Se integra $dE = \frac{k dq}{r^2}$ a lo largo de la línea
> - $dq = \lambda dx$, se resuelve por simetría
> - Dirección: radial perpendicular a la línea

### <span style="color:#7852ee">Campo eléctrico de un anillo uniforme de carga</span>
> [!example]
> $$E = \frac{kQz}{(z^2 + R^2)^{3/2}} \quad \text{(N/C o V/m)}$$
> - **Demostración:** Se integra $dE$ sobre el anillo
> - $dq = \lambda R d\theta$, por simetría solo queda la componente axial
> - En el centro ($z = 0$): $E = 0$

### <span style="color:#7852ee">Campo eléctrico de una semicircunferencia cargada</span>
> [!example]
> $$E = \frac{2k\lambda}{R} = \frac{\lambda}{2\pi\epsilon_0 R} = \frac{2kQ}{\pi R^2} = \frac{Q}{2\pi^2 \epsilon_0 R^2} \quad \text{(N/C o V/m)}$$
> - **Demostración:** Se integra $dE = \frac{k\,dq}{R^2}$ sobre la semicircunferencia
> - $dq = \lambda R\,d\theta$, por simetría solo queda la componente perpendicular al diámetro
> - **En función de la carga total:** $\lambda = \frac{Q}{\pi R}$
> - **Dirección:** a lo largo del eje de simetría (perpendicular al diámetro), hacia afuera si $\lambda > 0$
> - En el centro de curvatura de una semicircunferencia de radio $R$

### <span style="color:#7852ee">Campo eléctrico de un disco cargado uniformemente</span>
> [!example]
> $$E = \frac{\sigma}{2\epsilon_0}\left(1 - \frac{z}{\sqrt{z^2 + R^2}}\right) \quad \text{(N/C o V/m)}$$
> - **Demostración:** Se integra anillos concéntricos $dE = \frac{kz dq}{(z^2 + r^2)^{3/2}}$
> - $dq = \sigma 2\pi r dr$
> - Plano infinito ($R \to \infty$): $E = \frac{\sigma}{2\epsilon_0}$

### <span style="color:#ec7500">Flujo Eléctrico</span>
> [!question]
> $$\Phi = E \cdot A = EA \cos\theta \quad \text{(V·m)}$$
> - **Flujo a través de una superficie plana**
> - $\theta$ = ángulo entre $E$ y la normal a la superficie
> - **Flujo neto:** $\Phi_{neto} = \Phi_{entrante} + \Phi_{saliente}$

### <span style="color:#ec7500">Ley de Gauss</span>
> [!warning]
> $$\oint E \cdot dA = \frac{q}{\epsilon_0} \quad \text{(V·m)}$$
> - $\epsilon_0 = 8,85 \times 10^{-12} \, C^2/N \cdot m^2$
> - **El flujo eléctrico depende solo de la carga encerrada**
> - **Flujo = Campo eléctrico aplicando Ley de Gauss:** $\Phi = \frac{q_{encerrada}}{\epsilon_0}$

### <span style="color:#7852ee">Simetría Esférica</span>
> [!example]
> $$E \cdot 4\pi r^2 = \frac{q_{encerrada}}{\epsilon_0} \Rightarrow E = \frac{1}{4\pi\epsilon_0}\frac{q}{r^2} \quad \text{(N/C o V/m)}$$
> - Superficie gaussiana: esfera de radio $r$
> - $q_{encerrada} = \rho \cdot \frac{4}{3}\pi r^3$ (si $r < R$)
> - $q_{encerrada} = Q$ (si $r \geq R$)

### <span style="color:#7852ee">Simetría Cilíndrica</span>
> [!example]
> $$E \cdot 2\pi rL = \frac{\lambda L}{\epsilon_0} \Rightarrow E = \frac{\lambda}{2\pi\epsilon_0 r} \quad \text{(N/C o V/m)}$$
> - Superficie gaussiana: cilindro de radio $r$ y longitud $L$
> - $q_{encerrada} = \lambda L$
> - Se aplica para conductores infinitos o distribuciones cilíndricas

### <span style="color:#7852ee">Plano de Carga</span>
> [!example]
> $$E = \frac{\sigma}{2\epsilon_0} \quad \text{(N/C o V/m)}$$
> - Superficie gaussiana: cilindro que atraviesa el plano
> - $q_{encerrada} = \sigma A$
> - Campo uniforme, perpendicular y hacia ambos lados del plano
> - **Solo un plano con carga:** el campo apunta hacia afuera (si $\sigma > 0$) o hacia adentro (si $\sigma < 0$)

### <span style="color:#7852ee">Placas Paralelas (Capacitor)</span>
> [!example]
> $$E = \frac{\sigma}{\epsilon_0} = \frac{V}{d} \quad \text{(N/C o V/m)}$$
> - **Dos placas con cargas iguales y opuestas:** los campos se suman entre las placas
> - **Entre las placas:** $E = E_1 + E_2 = \frac{\sigma}{2\epsilon_0} + \frac{\sigma}{2\epsilon_0} = \frac{\sigma}{\epsilon_0}$
> - **Fuera de las placas:** $E = 0$ (los campos se cancelan)
> - $d$ = distancia entre placas, $V$ = voltaje

### <span style="color:#e93147">Movimiento de cargas en campo uniforme</span>
> [!danger]
> $$W = qV = \Delta E_c \quad \text{(J)}$$
> - **Energía cinética:** $E_c = \frac{1}{2}mv^2$ (J)
> - **Energía potencial eléctrica:** $E_p = K\frac{qQ}{r}$ (J)
> - **Energía potencial del sistema:** $U = K\sum_{i<j} \frac{q_i q_j}{r_{ij}}$ (J)

📄 [[Unidad 1 -Fuerzas y Campos Eléctricos.pdf|Ver PDF Unidad 1]]

---

# 🟢 Unidad 2 - Potencial Eléctrico

### <span style="color:#086ddd">Potencial Eléctrico (Puntual)</span>
> [!info]
> $$V = K\frac{Q}{r} \quad \text{(V)}$$
> - **Potencial debido a una carga puntual**
> - Unidad: Voltios (V) = J/C

### <span style="color:#00bfbc">Diferencia de Potencial</span>
> [!tip]
> $$\Delta V = -\int E \cdot ds \quad \text{(V)}$$
> - **Trabajo por unidad de carga**
> - **El trabajo realizado para desplazar una carga de un punto A a un punto B es:** $W = q\Delta V = q(V_B - V_A)$ (J)
> - $\Delta V = V_B - V_A$

### <span style="color:#7852ee">Relación Campo-Potencial</span>
> [!example]
> $$E = -\frac{dV}{ds} \quad \text{(V/m o N/C)}$$
> - **El campo eléctrico es el gradiente negativo del potencial**
> - Dirección: de mayor a menor potencial

### <span style="color:#ec7500">Capacitancia</span>
> [!question]
> $$C = \frac{Q}{V} \quad \text{(F)}$$
> - **Capacitancia = carga / diferencia de potencial**
> - Unidad: Faradios (F) = C/V

### <span style="color:#ec7500">Capacitor de placas paralelas</span>
> [!warning]
> $$C = \frac{\epsilon_0 A}{d} \quad \text{(F)}$$
> $$E = \frac{V}{d} \quad \text{(V/m o N/C)}$$
> - $A$ = área de las placas
> - $d$ = distancia entre placas
> - $V$ = voltaje entre las placas

### <span style="color:#086ddd">Capacitores en combinación</span>
> [!note]
> - **Serie:** $\frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2} + ...$ (F) → Las cargas Q son iguales
> - **Paralelo:** $C_{eq} = C_1 + C_2 + ...$ (F) → Los voltajes V son iguales

### <span style="color:#9e9e9e">Energía almacenada en un capacitor</span>
> [!cite]
> $$U = \frac{1}{2}CV^2 = \frac{1}{2}QV = \frac{Q^2}{2C} \quad \text{(J)}$$
> - **Tres formas equivalentes de calcular la energía**
> - **Con dieléctrico:** $U = \frac{1}{2}KCV^2 = \frac{1}{2}KQV = \frac{Q^2}{2KC}$ (J)

### <span style="color:#e93147">Energía de un campo eléctrico</span>
> [!danger]
> $$u = \frac{1}{2}\epsilon_0 E^2 \quad \text{(J/m³)}$$
> - **Densidad de energía (energía por unidad de volumen)**
> - **Con dieléctrico:** $u = \frac{1}{2}K\epsilon_0 E^2 = \frac{1}{2}\epsilon E^2$ (J/m³)

### <span style="color:#086ddd">Dieléctricos</span>
> [!info]
> - **Constante dieléctrica:** $K = \frac{\epsilon}{\epsilon_0}$ (adimensional, $K \geq 1$)
> - **Capacitancia con dieléctrico:** $C = KC_0 = \frac{K\epsilon_0 A}{d}$ (F)
> - **Campo eléctrico reducido:** $E = \frac{E_0}{K}$ (V/m)
> - **Polarización:** $P = \epsilon_0(K-1)E$ (C/m²)
> - **Carga inducida en superficie:** $\sigma_i = \sigma_0\left(1 - \frac{1}{K}\right)$ (C/m²)
> - **Permitividad del medio:** $\epsilon = K\epsilon_0$ (C²/N·m²)

📄 [[Unidad 2 - Potencial Eléctrico.pdf|Ver PDF Unidad 2]]

---

# 🔴 Unidad 3 - Circuitos de Corriente Continua

### <span style="color:#086ddd">Ley de Ohm</span>
> [!info]
> $$V = IR \quad \text{(V)}$$
> - $V$ = voltaje (V)
> - $I$ = corriente (A)
> - $R$ = resistencia (Ω)

### <span style="color:#00bfbc">Resistividad y Resistencia</span>
> [!tip]
> $$R = \rho \frac{l}{A} = \frac{l}{\sigma A} \quad \text{(Ω)}$$
> - $\rho$ = resistividad (Ω·m)
> - $\sigma$ = conductividad (S/m)
> - $l$ = longitud, $A$ = área

### <span style="color:#7852ee">Potencia Eléctrica</span>
> [!example]
> $$P = IV = I^2R = \frac{V^2}{R} \quad \text{(W)}$$
> - **Tres formas equivalentes de calcular potencia**
> - Unidad: Watts (W) = V·A

### <span style="color:#ec7500">Resistencias en Serie</span>
> [!question]
> $$R_{eq} = R_1 + R_2 + R_3 + ... \quad \text{(Ω)}$$
> - **La corriente I es la misma en todas**
> - **El voltaje se divide:** $V = V_1 + V_2 + ...$

### <span style="color:#ec7500">Resistencias en Paralelo</span>
> [!warning]
> $$\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + ... \quad \text{(Ω)}$$
> - **El voltaje V es el mismo en todas**
> - **La corriente se divide:** $I = I_1 + I_2 + ...$

### <span style="color:#9e9e9e">Leyes de Kirchhoff</span>
> [!cite]
> - **Ley de Nodos (I):** $\sum I_{entrada} = \sum I_{salida}$
> - **Ley de Mallas (II):** $\sum \varepsilon = \sum IR$
>
> [!tip] ¿Cuándo usar cada método?
> - **Por Nodos** conviene cuando:
>   - El circuito tiene **pocos nodos** (2-3 ecuaciones)
>   - Hay **más mallas que nodos**
>   - Se conocen las corrientes de las fuentes
>   - Se buscan voltajes entre puntos del circuito
>   - Ejemplo: puentes de Wheatstone, circuitos con resistencias en paralelo complejo
> - **Por Mallas** conviene cuando:
>   - El circuito tiene **pocas mallas** (2-3 ecuaciones)
>   - Hay **más nodos que mallas**
>   - Se conocen los voltajes de las fuentes
>   - Se buscan corrientes que fluyen por cada rama
>   - Ejemplo: circuitos en serie-paralelo, circuitos con múltiples bucles
> - **Regla general:** elegir el método que genere **menos ecuaciones**

### <span style="color:#ec7500">FEM y Resistencia Interna</span>
> [!question]
> **FEM** ($\varepsilon$): Fuerza Electromotriz — tensión que genera la batería
>
> $$\varepsilon = V + Ir \quad \text{(V)}$$
>
> **Fórmulas para calcular la FEM:**
> - **Con corriente conocida:** $\varepsilon = V_{terminal} + Ir$
> - **Circuito abierto (I = 0):** $\varepsilon = V_{terminal}$
> - **Por Ley de Mallas:** $\sum \varepsilon = \sum IR$
> - **Con carga y tiempo:** $\varepsilon = \frac{W}{q} = \frac{ItV}{q}$
>
> **Donde:**
> - $V$ = voltaje terminal de la batería (V)
> - $I$ = corriente que circula (A)
> - $r$ = resistencia interna de la batería (Ω)
> - $W$ = trabajo realizado por la FEM (J)
> - $q$ = carga que circula (C)

### <span style="color:#e93147">Trabajo y Energía en Circuitos</span>
> [!danger]
> $$W = qV = ItV \quad \text{(J)}$$
> - **Energía disipada:** $U = I^2Rt = \frac{V^2}{R}t$ (J)
> - **Carga que circula:** $q = It$ (C)

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

### <span style="color:#00bfbc">Unidad 1 - Fuerzas y Campos Eléctricos</span>
> [!tip]
> 1. **Coulomb:** $F = K\frac{q_1q_2}{r^2}$ (N)
> 2. **Campo eléctrico:** $E = K\frac{q}{r^2}$ (N/C o V/m)
> 3. **Semicircunferencia:** $E = \frac{2kQ}{\pi R^2} = \frac{Q}{2\pi^2 \epsilon_0 R^2}$ (N/C o V/m)
> 4. **Flujo eléctrico:** $\Phi = EA\cos\theta$ (V·m)
> 4. **Ley de Gauss:** $\Phi = \frac{q_{encerrada}}{\epsilon_0}$ (V·m)
> 5. **Trabajo:** $W = qV = \Delta E_c$ (J)
> 6. **Energía cinética:** $E_c = \frac{1}{2}mv^2$ (J)
> 7. **Energía potencial:** $E_p = K\frac{qQ}{r}$ (J)
> 8. **Energía potencial del sistema:** $U = K\sum_{i<j} \frac{q_i q_j}{r_{ij}}$ (J)

### <span style="color:#00bfbc">Unidad 2 - Potencial Eléctrico</span>
> [!tip]
> 8. **Potencial puntual:** $V = K\frac{Q}{r}$ (V)
> 9. **Capacitancia:** $C = \frac{Q}{V}$ (F)
> 10. **Capacitor placas paralelas:** $C = \frac{\epsilon_0 A}{d}$ (F), $E = \frac{V}{d}$ (V/m)
> 11. **Capacitores serie:** $\frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2}$ (F, Q iguales)
> 12. **Capacitores paralelo:** $C_{eq} = C_1 + C_2$ (F, V iguales)
> 13. **Energía capacitor:** $U = \frac{1}{2}CV^2 = \frac{1}{2}QV = \frac{Q^2}{2C}$ (J)
> 14. **Energía campo:** $u = \frac{1}{2}\epsilon_0 E^2$ (J/m³)
> 15. **Dieléctrico:** $C = KC_0$, $E = E_0/K$, $\sigma_i = \sigma_0(1-1/K)$

### <span style="color:#00bfbc">Unidad 3 - Circuitos</span>
> [!tip]
> 15. **Ley de Ohm:** $V = IR$ (V)
> 16. **Potencia:** $P = IV = I^2R = \frac{V^2}{R}$ (W)
> 17. **Resistencias serie:** $R_{eq} = R_1 + R_2$ (Ω, I iguales)
> 18. **Resistencias paralelo:** $\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2}$ (Ω, V iguales)
> 19. **Kirchhoff:** $\sum I_{ent} = \sum I_{sal}$ (A) | $\sum \varepsilon = \sum IR$ (V)
> 20. **FEM:** $\varepsilon = V + Ir$ (V)
