# Resumen Teórico - Física 2

> 📖 [[Sears Zemansky Vol. 2.pdf|Sears Zemansky Vol. 2]]
---

# 🔵 UNIDAD 1: Fuerzas y Campos Eléctricos

> [!info] Carga Eléctrica
> - Propiedad fundamental de la materia que causa fuerzas eléctricas
> - **Dos tipos:** positiva (+) y negativa (-)
> - **Carga elemental:** $e = 1,6 \times 10^{-19} \, C$
> - **Cuantización:** $q = \pm ne$ (n = 1, 2, 3...)
> - **Conservación:** la carga total en un sistema aislado se mantiene constante
> - Los protones tienen carga +e, los electrones tienen carga -e

> [!info] Ley de Coulomb
> - Describe la fuerza entre dos cargas puntuales
> - $F = K\frac{q_1q_2}{r^2}$ donde $K = 9 \times 10^9 \, N \cdot m^2/C^2$
> - Es una fuerza **central** (actúa en la línea que une las cargas)
> - Es **conservativa** (el trabajo no depende del camino)
> - Mismo signo → repulsión, distinto signo → atracción
> - Cumple la ley del cuadrado inverso (se debilita con la distancia)

> [!info] Principio de Superposición
> - La fuerza resultante sobre una carga es la **suma vectorial** de todas las fuerzas individuales
> - Permite analizar sistemas con múltiples cargas descomponiéndolos en pares
> - $\vec{F}_{total} = \vec{F}_1 + \vec{F}_2 + \vec{F}_3 + ...$

> [!info] Campo Eléctrico
> - Es una propiedad del espacio que indica qué fuerza experimentaría una carga positiva unitaria
> - $\vec{E} = \frac{\vec{F}}{q}$
> - Campo de una carga puntual: $E = K\frac{q}{r^2}$
> - Si q > 0: campo apunta hacia afuera (radial)
> - Si q < 0: campo apunta hacia adentro (radial)
> - Fuerza sobre una carga: $\vec{F} = q\vec{E}$
> - Es un **campo vectorial** (tiene magnitud y dirección en cada punto)

> [!info] Líneas de Campo Eléctrico
> - Líneas imaginarias que representan visualmente el campo
> - Salen de cargas positivas y entran en cargas negativas
> - **Nunca se cruzan** entre sí
> - La densidad de líneas indica la magnitud del campo
> - Son perpendiculares a las superficies conductoras
> - En campos uniformes son **paralelas y equidistantes**

> [!info] Flujo Eléctrico
> - Mide cuánto campo eléctrico atraviesa una superficie
> - $\Phi = \vec{E} \cdot \vec{A} = EA\cos\theta$
> - $\theta$ = ángulo entre el campo y la normal a la superficie
> - Si $\theta = 0°$: flujo máximo ($\Phi = EA$)
> - Si $\theta = 90°$: flujo nulo ($\Phi = 0$)
> - Unidad: $V \cdot m$ o $N \cdot m^2/C$

> [!info] Ley de Gauss
> - Una de las 4 ecuaciones fundamentales del electromagnetismo
> - Relaciona el flujo eléctrico con la carga encerrada
> - $\oint \vec{E} \cdot d\vec{A} = \frac{q_{encerrada}}{\epsilon_0}$
> - $\epsilon_0 = 8,85 \times 10^{-12} \, C^2/N \cdot m^2$ (permitividad del vacío)
> - La integral se hace sobre una **superficie gaussiana** cerrada
> - Es muy útil cuando hay **simetría** (esférica, cilíndrica, plana)

> [!info] Densidades de Carga
> - **Volumétrica:** $\rho = \frac{Q}{V}$ (distribuida en un volumen)
> - **Superficial:** $\sigma = \frac{Q}{A}$ (distribuida en una superficie)
> - **Lineal:** $\lambda = \frac{Q}{l}$ (distribuida a lo largo de una línea)
> - Permiten calcular campos cuando la carga no es puntual

> [!info] Movimiento de Cargas en Campo
> - **Trabajo:** $W = \int \vec{F} \cdot d\vec{r} = q\int \vec{E} \cdot d\vec{r}$
> - **Energía cinética:** $T = \frac{1}{2}mv^2$
> - **Energía potencial:** $U = K\frac{qQ}{r}$
> - **Energía potencial del sistema:** $U = K\sum_{i<j} \frac{q_i q_j}{r_{ij}}$
> - Se conserva la energía mecánica: $T_i + U_i = T_f + U_f$
> - Análogo con gravedad: $F = mg \leftrightarrow F = qE$

> [!info] Conductores en Equilibrio
> - En equilibrio electrostático, el campo eléctrico interior es **cero**
> - Toda la carga reside en la **superficie** exterior
> - El campo es **perpendicular** a la superficie
> - Los conductores son **equipotenciales** (mismo potencial en todo el material)
> - Si se coloca carga en un conductor, se distribuye automáticamente en la superficie

> [!info] Materiales Dieléctricos
> - Son **aislantes** que se polarizan al aplicar un campo eléctrico
> - La polarización crea un campo interno que se opone al campo externo
> - Reducen el campo neto: $E_{neto} = \frac{E_0}{K_e}$
> - $K_e$ = constante dieléctrica ($K_e \geq 1$)
> - Se usan en capacitores para **aumentar la capacitancia**
> - El vacío tiene $K_e = 1$

📄 [[Unidad 1 -Fuerzas y Campos Eléctricos.pdf|Ver PDF Unidad 1]]

---

# 🟢 UNIDAD 2: Potencial Eléctrico

> [!tip] Potencial Eléctrico
> - Es la **energía por unidad de carga** en un punto del campo
> - $V = K\frac{Q}{r}$ (debido a una carga puntual)
> - Es un **escalar** (no tiene dirección), a diferencia del campo
> - Unidad: **Voltios (V)** = Julios/Coulomb
> - Si Q > 0: potencial positivo, se aleja de la carga
> - Si Q < 0: potencial negativo, se acerca a la carga
> - El potencial se toma como **cero** en el infinito

> [!tip] Diferencia de Potencial
> - Es el trabajo necesario para mover una carga entre dos puntos
> - $\Delta V = V_B - V_A = -\int_A^B \vec{E} \cdot d\vec{s}$
> - Independiente del camino (campo conservativo)
> - Es lo que mide un **voltímetro**
> - Si $\Delta V > 0$: la carga gana energía potencial
> - Si $\Delta V < 0$: la carga pierde energía potencial

> [!tip] Relación Campo-Potencial
> - El campo eléctrico es el **gradiente negativo** del potencial
> - $\vec{E} = -\frac{dV}{ds}$
> - El campo apunta siempre de **mayor a menor potencial**
> - En campo uniforme: $E = \frac{\Delta V}{d}$
> - Permite calcular el campo si conocemos la distribución de potencial

> [!tip] Equipotenciales
> - Son superficies donde el potencial es **constante**
> - Son **perpendiculares** a las líneas de campo
> - No se cruzan entre sí
> - No se necesita trabajo para mover cargas sobre una equipotencial
> - Ejemplos: esferas concéntricas (carga puntual), planos paralelos (placas)

> [!tip] Capacitancia
> - Capacidad de un cuerpo para almacenar carga
> - $C = \frac{Q}{V}$
> - Unidad: **Faradios (F)** = Coulombs/Voltio
> - Depende de la **geometía** y el **material**, no de Q ni V
> - Un capacitor almacena energía en el campo eléctrico entre sus placas

> [!tip] Capacitor de Placas Paralelas
> - Dos placas conductoras separadas por un dieléctrico
> - $C = \frac{\epsilon_0 A}{d}$
> - $A$ = área de las placas, $d$ = distancia entre ellas
> - Aumenta con: mayor área, menor distancia, mejor dieléctrico
> - El campo entre las placas es **uniforme** (si es grande comparado con d)

> [!tip] Capacitores en Combinación
> - **Serie:** $\frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2} + ...$
>   - La carga es la misma en todos
>   - El voltaje se divide
>   - $C_{eq}$ es **menor** que la menor capacitancia individual
> - **Paralelo:** $C_{eq} = C_1 + C_2 + ...$
>   - El voltaje es el mismo en todos
>   - La carga se divide
>   - $C_{eq}$ es **mayor** que la mayor capacitancia individual

> [!tip] Energía en Capacitores
> - Energía almacenada en un capacitor:
> - $U = \frac{1}{2}CV^2 = \frac{1}{2}QV = \frac{Q^2}{2C}$
> - Tres formas equivalentes de calcular la misma energía
> - La energía se almacena en el **campo eléctrico** entre las placas
> - **Con dieléctrico:** $U = \frac{1}{2}K_eCV^2 = \frac{1}{2}K_eQV = \frac{Q^2}{2K_eC}$

> [!tip] Energía de un Campo Eléctrico
> - **Densidad de energía (energía por volumen):**
> - $u = \frac{1}{2}\epsilon_0 E^2$ (en el vacío)
> - **Con dieléctrico:** $u = \frac{1}{2}K_e\epsilon_0 E^2 = \frac{1}{2}\epsilon E^2$
> - $\epsilon = K_e\epsilon_0$ = permitividad del medio

> [!tip] Dieléctricos
> - **Constante dieléctrica:** $K_e = \frac{\epsilon}{\epsilon_0}$ ($K_e \geq 1$, adimensional)
> - **Capacitancia con dieléctrico:** $C = K_eC_0$
> - **Campo eléctrico reducido:** $E = \frac{E_0}{K_e}$
> - **Polarización:** $P = \epsilon_0(K_e - 1)E$
> - **Carga inducida en superficie:** $\sigma_i = \sigma_0\left(1 - \frac{1}{K_e}\right)$
> - El vacío tiene $K_e = 1$
> - Se usan para **aumentar la capacitancia** y soportar mayores campos

> [!tip] Carga y Descarga
> - **Carga:** $q(t) = Q_f(1 - e^{-t/RC})$
> - **Descarga:** $q(t) = Q_0 e^{-t/RC}$
> - **Constante de tiempo:** $\tau = RC$
> - Después de $5\tau$, el proceso se considera completo (~99%)
> - La carga crece/decrece **exponencialmente**, no linealmente

📄 [[Unidad 2 - Potencial Eléctrico.pdf|Ver PDF Unidad 2]]

---

# 🔴 UNIDAD 3: Circuitos de Corriente Continua

> [!warning] Corriente Eléctrica
> - Es el **flujo de carga** por unidad de tiempo
> - $I = \frac{dq}{dt}$
> - Unidad: **Amperios (A)** = Coulombs/segundo
> - Es un **escalar** pero tiene dirección convencional (de + a -)
> - La corriente **convencional** va del positivo al negativo
> - Los electrones se mueven en dirección contraria

> [!warning] Ley de Ohm
> - Relaciona voltaje, corriente y resistencia
> - $V = IR$
> - **Voltaje** (V): fuerza que impulsa la corriente
> - **Corriente** (I): flujo de carga
> - **Resistencia** (R): oposición al flujo de carga
> - No todos los materiales cumplen la ley de Ohm (solo ohmicos)

> [!warning] Resistividad y Resistencia
> - **Resistencia:** $R = \rho\frac{l}{A}$
> - $\rho$ = resistividad (propiedad del material)
> - $l$ = longitud del conductor
> - $A$ = área de la sección transversal
> - **Conductividad:** $\sigma = \frac{1}{\rho}$
> - La resistencia aumenta con: mayor longitud, menor área, mayor resistividad
> - La resistencia **aumenta con la temperatura** (metales)

> [!warning] Potencia Eléctrica
> - Tasa a la que se disipa energía en un resistor
> - $P = IV = I^2R = \frac{V^2}{R}$
> - Tres formas equivalentes según los datos disponibles
> - Unidad: **Watts (W)** = Voltios × Amperios
> - Representa la energía que se convierte en **calor** (efecto Joule)

> [!warning] Resistencias en Serie
> - Conectadas una tras otra, compartiendo un **solo nodo**
> - $R_{eq} = R_1 + R_2 + R_3 + ...$
> - La **corriente es la misma** en todas
> - El **voltaje se divide**: $V = V_1 + V_2 + ...$
> - $R_{eq}$ es **mayor** que cualquier resistencia individual
> - Se usan para **limitar corriente**

> [!warning] Resistencias en Paralelo
> - Conectadas entre los **mismos dos nodos**
> - $\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + ...$
> - El **voltaje es el mismo** en todas
> - La **corriente se divide**: $I = I_1 + I_2 + ...$
> - $R_{eq}$ es **menor** que cualquier resistencia individual
> - Se usan para **dividir corriente**

> [!warning] Leyes de Kirchhoff
> - **Primera Ley (Nodos):** $\sum I_{entrada} = \sum I_{salida}$
>   - La corriente que entra a un nodo sale por otros caminos
>   - Es la **conservación de la carga**
> - **Segunda Ley (Mallas):** $\sum \varepsilon = \sum IR$
>   - La suma de FEM en una malla equals la suma de caídas de voltaje
> - Es la **conservación de la energía**

> [!warning] FEM y Resistencia Interna
> - **FEM** ($\varepsilon$): fuerza electromotriz de la batería
> - Toda batería real tiene una **resistencia interna** $r$
> - Voltaje terminal: $V = \varepsilon - Ir$
> - Si la corriente es cero (circuito abierto): $V = \varepsilon$
> - La resistencia interna causa pérdidas internas

> [!warning] Circuitos Mixtos
> - Contienen combinaciones de resistencias en **serie y paralelo**
> - **Pasos para resolver:**
>   1. Identificar combinaciones en paralelo y serie
>   2. Simplificar calculando resistencias equivalentes
>   3. Aplicar ley de Ohm al circuito simplificado
>   4. Ir "deshaciendo" para encontrar corrientes y voltajes individuales
>   5. Verificar con las leyes de Kirchhoff

> [!warning] Circuitos RC
> - Contienen **resistores** y **capacitores**
> - **Constante de tiempo:** $\tau = RC$
> - **Carga (carga):** $q = Q_f(1 - e^{-t/RC})$
> - **Carga (descarga):** $q = Q_0 e^{-t/RC}$
> - **Corriente:** $i = I_0 e^{-t/RC}$
> - Después de $5\tau$: ~99% del proceso completado
> - El capacitor se carga/descarga **exponencialmente**

> [!warning] Medición en Circuitos
> - **Voltímetro:** se conecta en **paralelo** al componente (mide voltaje)
> - **Amperímetro:** se conecta en **serie** al circuito (mide corriente)
> - Un voltímetro ideal tiene resistencia **infinita**
> - Un amperímetro ideal tiene resistencia **cero**

📄 [[Unidad 3 - Circuitos de Corriente Continua.pdf|Ver PDF Unidad 3]]

---

# 📋 Comparativa entre Unidades

| Concepto | Unidad 1 | Unidad 2 | Unidad 3 |
|----------|----------|----------|----------|
| **Tema central** | Fuerzas y campos | Potencial y energía | Circuitos |
| **Concepto clave** | Campo eléctrico | Voltaje | Corriente |
| **Leyes principales** | Coulomb, Gauss | Potencial, Capacitancia | Ohm, Kirchhoff |
| **Tipo de cálculo** | Vectorial (fuerzas) | Escalar (energías) | Escalar (corrientes) |
| **Enfoque** | Cargas aisladas | Almacenamiento de energía | Flujo de energía |

---

# 🎯 Conexiones entre Unidades

1. La **Unidad 1** establece las fuerzas → la **Unidad 2** usa eso para definir energía/potencial
2. El **campo eléctrico** (U1) se relaciona con el **potencial** (U2): $E = -\frac{dV}{ds}$
3. La **capacitancia** (U2) usa conceptos de campos (U1) y se aplica en **circuitos** (U3)
4. Los **circuitos** (U3) son la aplicación práctica de todo lo anterior
