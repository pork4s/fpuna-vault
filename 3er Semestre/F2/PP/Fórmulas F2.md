# Resumen de Fórmulas - Física 2

> 📖 [[Sears Zemansky Vol. 2.pdf|Sears Zemansky Vol. 2]]

---

# 🔵 Unidad 1 - Fuerzas y Campos Eléctricos

> [!info] Carga Eléctrica
> - **Carga elemental:** $e = 1,6 \times 10^{-19} \, C$
> - **Cuantización de carga:** $q = \pm ne$ (donde $n = 1, 2, 3, ...$)

> [!tip] Ley de Coulomb
> $$F = K \frac{q_1 q_2}{r^2} \quad \text{(N)}$$
> - $K = 9 \times 10^9 \, N \cdot m^2/C^2$
> - **Fuerza entre dos cargas puntuales**

> [!example] Campo Eléctrico
> $$E = K \frac{q}{r^2} \quad \text{(N/C o V/m)}$$
> - **Campo eléctrico de una carga puntual**
> - Dirección: radial (hacia afuera si $q > 0$, hacia adentro si $q < 0$)

> [!note] Fuerza sobre carga en campo eléctrico
> $$F = qE \quad \text{(N)}$$
> - **Fuerza = carga × campo eléctrico**
> - **Relación de dirección:**
>   - Si $q > 0$ (positiva): $F$ y $E$ apuntan en **el mismo sentido**
>   - Si $q < 0$ (negativa): $F$ y $E$ apuntan en **sentido contrario**

> [!cite] Densidades de Carga
> - **Volumétrica:** $\rho = \frac{Q}{V}$ (C/m³)
> - **Superficial:** $\sigma = \frac{Q}{A}$ (C/m²)
> - **Lineal:** $\lambda = \frac{Q}{l}$ (C/m)

> [!note] Demostraciones de Campo Eléctrico

> [!example] Campo eléctrico debido a una línea cargada
> $$E = \frac{\lambda}{2\pi\epsilon_0 r} \quad \text{(N/C o V/m)}$$
> - **Demostración:** Se integra $dE = \frac{k dq}{r^2}$ a lo largo de la línea
> - $dq = \lambda dx$, se resuelve por simetría
> - Dirección: radial perpendicular a la línea

> [!example] Campo eléctrico de un anillo uniforme de carga
> $$E = \frac{kQz}{(z^2 + R^2)^{3/2}} \quad \text{(N/C o V/m)}$$
> - **Demostración:** Se integra $dE$ sobre el anillo
> - $dq = \lambda R d\theta$, por simetría solo queda la componente axial
> - En el centro ($z = 0$): $E = 0$

> [!example] Campo eléctrico de un disco cargado uniformemente
> $$E = \frac{\sigma}{2\epsilon_0}\left(1 - \frac{z}{\sqrt{z^2 + R^2}}\right) \quad \text{(N/C o V/m)}$$
> - **Demostración:** Se integra anillos concéntricos $dE = \frac{kz dq}{(z^2 + r^2)^{3/2}}$
> - $dq = \sigma 2\pi r dr$
> - Plano infinito ($R \to \infty$): $E = \frac{\sigma}{2\epsilon_0}$

> [!question] Flujo Eléctrico
> $$\Phi = E \cdot A = EA \cos\theta \quad \text{(V·m)}$$
> - **Flujo a través de una superficie plana**
> - $\theta$ = ángulo entre $E$ y la normal a la superficie
> - **Flujo neto:** $\Phi_{neto} = \Phi_{entrante} + \Phi_{saliente}$

> [!warning] Ley de Gauss
> $$\oint E \cdot dA = \frac{q}{\epsilon_0} \quad \text{(V·m)}$$
> - $\epsilon_0 = 8,85 \times 10^{-12} \, C^2/N \cdot m^2$
> - **El flujo eléctrico depende solo de la carga encerrada**
> - **Flujo = Campo eléctrico aplicando Ley de Gauss:** $\Phi = \frac{q_{encerrada}}{\epsilon_0}$

> [!note] Demostraciones de Flujo Eléctrico con Ley de Gauss

> [!example] Simetría Esferica (Carga esférica)
> $$E \cdot 4\pi r^2 = \frac{q_{encerrada}}{\epsilon_0} \Rightarrow E = \frac{1}{4\pi\epsilon_0}\frac{q}{r^2} \quad \text{(N/C o V/m)}$$
> - Superficie gaussiana: esfera de radio $r$
> - $q_{encerrada} = \rho \cdot \frac{4}{3}\pi r^3$ (si $r < R$)
> - $q_{encerrada} = Q$ (si $r \geq R$)

> [!example] Simetría Cilíndrica (Carga cilíndrica)
> $$E \cdot 2\pi rL = \frac{\lambda L}{\epsilon_0} \Rightarrow E = \frac{\lambda}{2\pi\epsilon_0 r} \quad \text{(N/C o V/m)}$$
> - Superficie gaussiana: cilindro de radio $r$ y longitud $L$
> - $q_{encerrada} = \lambda L$
> - Se aplica para conductores infinitos o distribuciones cilíndricas

> [!example] Plano de Carga (Superficie infinita)
> $$E \cdot A = \frac{\sigma A}{\epsilon_0} \Rightarrow E = \frac{\sigma}{\epsilon_0} \quad \text{(N/C o V/m)}$$
> - Superficie gaussiana: cilindro que atraviesa el plano
> - $q_{encerrada} = \sigma A$
> - Campo uniforme y perpendicular al plano

> [!important] Movimiento de cargas en campo uniforme
> $$W = qV = \Delta E_c \quad \text{(J)}$$
> - **Energía cinética:** $E_c = \frac{1}{2}mv^2$ (J)
> - **Energía potencial eléctrica:** $E_p = K\frac{qQ}{r}$ (J)

📄 [[Unidad 1 -Fuerzas y Campos Eléctricos.pdf|Ver PDF Unidad 1]]

---

# 🟢 Unidad 2 - Potencial Eléctrico

> [!info] Potencial Eléctrico (Puntual)
> $$V = K\frac{Q}{r} \quad \text{(V)}$$
> - **Potencial debido a una carga puntual**
> - Unidad: Voltios (V) = J/C

> [!tip] Diferencia de Potencial
> $$\Delta V = -\int E \cdot ds \quad \text{(V)}$$
> - **Trabajo por unidad de carga**
> - **El trabajo realizado para desplazar una carga de un punto A a un punto B es:** $W = q\Delta V = q(V_B - V_A)$ (J)
> - $\Delta V = V_B - V_A$

> [!example] Relación Campo-Potencial
> $$E = -\frac{dV}{ds} \quad \text{(V/m o N/C)}$$
> - **El campo eléctrico es el gradiente negativo del potencial**
> - Dirección: de mayor a menor potencial

> [!question] Capacitancia
> $$C = \frac{Q}{V} \quad \text{(F)}$$
> - **Capacitancia = carga / diferencia de potencial**
> - Unidad: Faradios (F) = C/V

> [!warning] Capacitor de placas paralelas
> $$C = \frac{\epsilon_0 A}{d} \quad \text{(F)}$$
> - $A$ = área de las placas
> - $d$ = distancia entre placas

> [!note] Capacitores en combinación
> - **Serie:** $\frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2} + ...$ (F) → Las cargas Q son iguales
> - **Paralelo:** $C_{eq} = C_1 + C_2 + ...$ (F) → Los voltajes V son iguales

> [!cite] Energía almacenada en un capacitor
> $$U = \frac{1}{2}CV^2 = \frac{1}{2}QV = \frac{Q^2}{2C} \quad \text{(J)}$$
> - **Tres formas equivalentes de calcular la energía**
> - **Con dieléctrico:** $U = \frac{1}{2}KCV^2 = \frac{1}{2}KQV = \frac{Q^2}{2KC}$ (J)

> [!important] Energía de un campo eléctrico
> $$u = \frac{1}{2}\epsilon_0 E^2 \quad \text{(J/m³)}$$
> - **Densidad de energía (energía por unidad de volumen)**
> - **Con dieléctrico:** $u = \frac{1}{2}K\epsilon_0 E^2 = \frac{1}{2}\epsilon E^2$ (J/m³)

> [!info] Dieléctricos
> - **Constante dieléctrica:** $K = \frac{\epsilon}{\epsilon_0}$ (adimensional, $K \geq 1$)
> - **Capacitancia con dieléctrico:** $C = KC_0 = \frac{K\epsilon_0 A}{d}$ (F)
> - **Campo eléctrico reducido:** $E = \frac{E_0}{K}$ (V/m)
> - **Polarización:** $P = \epsilon_0(K-1)E$ (C/m²)
> - **Carga inducida en superficie:** $\sigma_i = \sigma_0\left(1 - \frac{1}{K}\right)$ (C/m²)
> - **Permitividad del medio:** $\epsilon = K\epsilon_0$ (C²/N·m²)

📄 [[Unidad 2 - Potencial Eléctrico.pdf|Ver PDF Unidad 2]]

---

# 🔴 Unidad 3 - Circuitos de Corriente Continua

> [!info] Ley de Ohm
> $$V = IR \quad \text{(V)}$$
> - $V$ = voltaje (V)
> - $I$ = corriente (A)
> - $R$ = resistencia (Ω)

> [!tip] Resistividad y Resistencia
> $$R = \rho \frac{l}{A} = \frac{l}{\sigma A} \quad \text{(Ω)}$$
> - $\rho$ = resistividad (Ω·m)
> - $\sigma$ = conductividad (S/m)
> - $l$ = longitud, $A$ = área

> [!example] Potencia Eléctrica
> $$P = IV = I^2R = \frac{V^2}{R} \quad \text{(W)}$$
> - **Tres formas equivalentes de calcular potencia**
> - Unidad: Watts (W) = V·A

> [!question] Resistencias en Serie
> $$R_{eq} = R_1 + R_2 + R_3 + ... \quad \text{(Ω)}$$
> - **La corriente I es la misma en todas**
> - **El voltaje se divide:** $V = V_1 + V_2 + ...$

> [!warning] Resistencias en Paralelo
> $$\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + ... \quad \text{(Ω)}$$
> - **El voltaje V es el mismo en todas**
> - **La corriente se divide:** $I = I_1 + I_2 + ...$

> [!cite] Leyes de Kirchhoff
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

> [!note] FEM y Resistencia Interna
> $$V = \varepsilon - Ir \quad \text{(V)}$$
> - $\varepsilon$ = fuerza electromotriz (FEM)
> - $r$ = resistencia interna de la batería

> [!danger] Trabajo y Energía en Circuitos
> $$W = qV = ItV \quad \text{(J)}$$
> - **Energía disipada:** $U = I^2Rt = \frac{V^2}{R}t$ (J)
> - **Carga que circula:** $q = It$ (C)

📄 [[Unidad 3 - Circuitos de Corriente Continua.pdf|Ver PDF Unidad 3]]

---

# 🎯 Unidad 4 - Proyectiles (Movimiento Parabólico)

> [!info] Componentes de Velocidad Inicial
> $$v_{0x} = v_0 \cos\theta \quad \text{(m/s)}$$
> $$v_{0y} = v_0 \sin\theta \quad \text{(m/s)}$$
> - $v_0$ = velocidad inicial
> - $\theta$ = ángulo de lanzamiento con la horizontal

> [!tip] Posición en Función del Tiempo
> $$x(t) = v_{0x} \cdot t = v_0 \cos\theta \cdot t \quad \text{(m)}$$
> $$y(t) = v_{0y} \cdot t - \frac{1}{2}gt^2 = v_0 \sin\theta \cdot t - \frac{1}{2}gt^2 \quad \text{(m)}$$
> - La posición horizontal es uniforme (velocidad constante)
> - La posición vertical es acelerada (gravedad $g = 9,8 \, m/s^2$)

> [!warning] Velocidad en Función del Tiempo
> $$v_x(t) = v_{0x} = v_0 \cos\theta \quad \text{(m/s)}$$
> $$v_y(t) = v_{0y} - gt = v_0 \sin\theta - gt \quad \text{(m/s)}$$
> - La componente horizontal **no cambia**
> - La componente vertical **disminuye** con el tiempo

> [!important] Tiempo de Vuelo ($t_v$)
> $$t_v = \frac{2v_0 \sin\theta}{g} \quad \text{(s)}$$
> - **Tiempo total que el proyectil permanece en el aire**
> - Se calcula cuando $y = 0$ (regresa a la altura de lanzamiento)

> [!important] Tiempo de Subida ($t_s$)
> $$t_s = \frac{v_0 \sin\theta}{g} = \frac{t_v}{2} \quad \text{(s)}$$
> - **Tiempo que tarda en alcanzar la altura máxima**
> - Es exactamente la mitad del tiempo de vuelo
> - En el punto máximo: $v_y = 0$

> [!example] Altura Máxima ($h_{máx}$)
> $$h_{máx} = \frac{v_0^2 \sin^2\theta}{2g} = \frac{(v_0 \sin\theta)^2}{2g} \quad \text{(m)}$$
> - **Altura máxima alcanzada por el proyectil**
> - También se puede calcular: $h_{máx} = \frac{g t_v^2}{8}$

> [!example] Alcance Máximo ($R$)
> $$R = \frac{v_0^2 \sin 2\theta}{g} = \frac{v_0^2 \cdot 2\sin\theta \cos\theta}{g} \quad \text{(m)}$$
> - **Distancia horizontal recorrida**
> - Alcance máximo se alcanza cuando $\theta = 45°$ ($\sin 90° = 1$)
> - $\sin 2\theta$ es máximo cuando $2\theta = 90°$, es decir $\theta = 45°$

> [!note] Ángulos Complementarios
> - **Lanzamientos con ángulos complementarios** ($\theta$ y $90° - \theta$) alcanzan el **mismo alcance**
> - Ejemplo: $30°$ y $60°$ dan el mismo alcance
> - Pero el de mayor ángulo alcanza **mayor altura**

> [!cite] Ecuación de Trayectoria (Sin $t$)
> $$y = x \tan\theta - \frac{gx^2}{2v_0^2 \cos^2\theta} \quad \text{(m)}$$
> - **Relación directa entre $y$ y $x$** (sin dependencia del tiempo)
> - Es una **parábola** (ecuación de segundo grado en $x$)

> [!question] Velocidad en Cualquier Punto
> $$v = \sqrt{v_x^2 + v_y^2} = \sqrt{(v_0 \cos\theta)^2 + (v_0 \sin\theta - gt)^2} \quad \text{(m/s)}$$
> - **Magnitud de la velocidad instantánea**
> - Dirección: $\tan\phi = \frac{v_y}{v_x}$ (ángulo con la horizontal)

> [!tip] Resumen Rápido de Fórmulas
> | Fórmula | Expresión | Unidad |
> |---------|-----------|--------|
> | Tiempo de vuelo | $t_v = \frac{2v_0 \sin\theta}{g}$ | s |
> | Tiempo de subida | $t_s = \frac{v_0 \sin\theta}{g}$ | s |
> | Altura máxima | $h_{máx} = \frac{v_0^2 \sin^2\theta}{2g}$ | m |
> | Alcance máximo | $R = \frac{v_0^2 \sin 2\theta}{g}$ | m |
> | Trayectoria | $y = x \tan\theta - \frac{gx^2}{2v_0^2 \cos^2\theta}$ | m |

📄 [[Ver PDF Proyectiles|Ver PDF Unidad 4]]

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
> 1. **Coulomb:** $F = K\frac{q_1q_2}{r^2}$ (N)
> 2. **Campo eléctrico:** $E = K\frac{q}{r^2}$ (N/C o V/m)
> 3. **Flujo eléctrico:** $\Phi = EA\cos\theta$ (V·m)
> 4. **Ley de Gauss:** $\Phi = \frac{q_{encerrada}}{\epsilon_0}$ (V·m)
> 5. **Trabajo:** $W = qV = \Delta E_c$ (J)
> 6. **Energía cinética:** $E_c = \frac{1}{2}mv^2$ (J)
> 7. **Energía potencial:** $E_p = K\frac{qQ}{r}$ (J)

> [!tip] Unidad 2 - Potencial Eléctrico
> 8. **Potencial puntual:** $V = K\frac{Q}{r}$ (V)
> 9. **Capacitancia:** $C = \frac{Q}{V}$ (F)
> 10. **Capacitor placas paralelas:** $C = \frac{\epsilon_0 A}{d}$ (F)
> 11. **Capacitores serie:** $\frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2}$ (F, Q iguales)
> 12. **Capacitores paralelo:** $C_{eq} = C_1 + C_2$ (F, V iguales)
> 13. **Energía capacitor:** $U = \frac{1}{2}CV^2 = \frac{1}{2}QV = \frac{Q^2}{2C}$ (J)
> 14. **Energía campo:** $u = \frac{1}{2}\epsilon_0 E^2$ (J/m³)
> 15. **Dieléctrico:** $C = KC_0$, $E = E_0/K$, $\sigma_i = \sigma_0(1-1/K)$

> [!tip] Unidad 3 - Circuitos
> 15. **Ley de Ohm:** $V = IR$ (V)
> 16. **Potencia:** $P = IV = I^2R = \frac{V^2}{R}$ (W)
> 17. **Resistencias serie:** $R_{eq} = R_1 + R_2$ (Ω, I iguales)
> 18. **Resistencias paralelo:** $\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2}$ (Ω, V iguales)
> 19. **Kirchhoff:** $\sum I_{ent} = \sum I_{sal}$ (A) | $\sum \varepsilon = \sum IR$ (V)

> [!tip] Unidad 4 - Proyectiles
> 20. **Tiempo de vuelo:** $t_v = \frac{2v_0 \sin\theta}{g}$ (s)
> 21. **Tiempo de subida:** $t_s = \frac{v_0 \sin\theta}{g}$ (s)
> 22. **Altura máxima:** $h_{máx} = \frac{v_0^2 \sin^2\theta}{2g}$ (m)
> 23. **Alcance máximo:** $R = \frac{v_0^2 \sin 2\theta}{g}$ (m)
> 24. **Velocidad horizontal:** $v_x = v_0 \cos\theta$ (m/s)
> 25. **Velocidad vertical:** $v_y = v_0 \sin\theta - gt$ (m/s)
> 26. **Trayectoria:** $y = x \tan\theta - \frac{gx^2}{2v_0^2 \cos^2\theta}$ (m)
