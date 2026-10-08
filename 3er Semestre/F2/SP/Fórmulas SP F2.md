# Fórmulas SP - Física 2 (Unidad 3 RC → fin + Unidad 4)

> 📖 [[Unidad 3 - Circuitos de Corriente Continua 1.pdf|Unidad 3 - Circuitos de CC (1).pdf]] · [[Unidad 4 - Magnetismo.pdf|Unidad 4 - Magnetismo.pdf]]

---

> [!note]- 📑 Índice
> ### [[#Unidad 3 - Circuito RC (hasta el fin de la Unidad 3)]]
> - [[#Circuito RC - Conceptos]]
> - [[#Carga de un capacitor]]
> - [[#Corriente en la carga]]
> - [[#Constante de tiempo]]
> - [[#Descarga de un capacitor]]
> - [[#Corriente en la descarga]]
> - [[#Fuerza Electromotriz (FEM)]]
> - [[#Voltaje terminal (fuente real)]]
> - [[#Fuente ideal]]
> - [[#Corriente total del circuito]]
> - [[#FEM de una pila]]
> - [[#Potencial de contacto y FEM térmicas]]
>
> ### [[#Unidad 4 - Magnetismo]]
> - [[#Campo magnético]]
> - [[#Fuerza magnética sobre una carga en movimiento]]
> - [[#Fuerza magnética (forma vectorial)]]
> - [[#Unidades del campo magnético]]
> - [[#Ecuación de Lorentz]]
> - [[#Flujo magnético]]
> - [[#Flujo magnético neto (superficie cerrada)]]
> - [[#Movimiento circular de una carga]]
> - [[#Radio de la órbita circular]]
> - [[#Rapidez angular y frecuencia del ciclotrón]]
> - [[#Movimiento helicoidal]]
> - [[#Fuerza magnética sobre un conductor recto]]
> - [[#Fuerza sobre un segmento arbitrario]]
> - [[#Fuerza neta sobre una espira cerrada]]
> - [[#Ley de Biot y Savart]]
> - [[#Alambre recto finito]]
> - [[#Alambre recto largo e infinito]]
> - [[#Arco circular de corriente]]
> - [[#Espira circular (campo axial)]]
> - [[#Espira circular (en el centro)]]
> - [[#Flujo a través de una espira rectangular]]
> - [[#Fuerza entre dos alambres paralelos]]
> - [[#Ley de Ampère]]
>
> ### [[#Constantes y Datos Útiles]]
> ### [[#Fórmulas Rápidas para Exámenes]]

---

# 🔴 Unidad 3 - Circuito RC (hasta el fin de la Unidad 3)

### <span style="color:#086ddd">Circuito RC - Conceptos</span>
> [!info]
> - Circuito formado por una **resistencia R** y un **capacitor C** en serie con una fuente.
> - La corriente **varía con el tiempo**: el capacitor se **carga** o se **descarga** según la posición del interruptor.
> - Se analiza aplicando la **ley de mallas de Kirchhoff**: $\varepsilon - \dfrac{q}{C} - IR = 0$ (carga)
> - En descarga la fuente no interviene: $-\dfrac{q}{C} - IR = 0$

### <span style="color:#00bfbc">Carga de un capacitor</span>
> [!tip]
> $$q = C\varepsilon\left(1 - e^{-\frac{t}{RC}}\right) = Q_f\left(1 - e^{-\frac{t}{RC}}\right) \quad \text{(C)}$$
> - **Carga en función del tiempo** cuando el interruptor está en la posición de carga.
> - $Q_f = C\varepsilon$ = carga final (valor máximo que alcanza).
> - En $t = 0$: $q = 0$ (capacitor descargado). En $t \to \infty$: $q \to Q_f$ (crecimiento asintótico).

### <span style="color:#7852ee">Corriente en la carga</span>
> [!example]
> $$i = \frac{dq}{dt} = \frac{\varepsilon}{R}\,e^{-\frac{t}{RC}} = I_0\,e^{-\frac{t}{RC}} \quad \text{(A)}$$
> - Se obtiene derivando la carga respecto al tiempo ($I = dq/dt$).
> - $I_0 = \dfrac{\varepsilon}{R}$ = corriente inicial (máxima, en $t = 0$).
> - La corriente **disminuye exponencialmente** hasta tender a cero cuando el capacitor termina de cargar.

### <span style="color:#ec7500">Constante de tiempo</span>
> [!question]
> $$\tau = RC \quad \text{(s)}$$
> - Define la **rapidez** con que carga o descarga el capacitor.
> - Cuando $t = \tau$: el capacitor está cargado al $63,2\%$ de su carga final.
> - Para $t \geq 5\tau$ se lo considera **totalmente cargado** (o descargado).
> - $R$ en $\Omega$ y $C$ en F → $\tau$ en segundos.

### <span style="color:#9e9e9e">Descarga de un capacitor</span>
> [!cite]
> $$q = Q_0\,e^{-\frac{t}{RC}} \quad \text{(C)}$$
> - **Carga restante** del capacitor cuando se desconecta la fuente y se cierra por el resistor.
> - $Q_0$ = carga inicial con la que estaba el capacitor.
> - En $t = 0$: $q = Q_0$. En $t \to \infty$: $q \to 0$ (descarga asintótica).

### <span style="color:#e93147">Corriente en la descarga</span>
> [!danger]
> $$i = \frac{dq}{dt} = -\frac{Q_0}{RC}\,e^{-\frac{t}{RC}} = -I_0\,e^{-\frac{t}{RC}} \quad \text{(A)}$$
> - El **signo negativo** indica que la corriente circula en **sentido contrario** al de la carga.
> - Su magnitud también decae exponencialmente hasta cero.

### <span style="color:#086ddd">Fuerza Electromotriz (FEM)</span>
> [!info]
> $$\varepsilon = \frac{W}{q} \quad \text{(V)}$$
> - **Energía o trabajo** necesario para llevar una carga de un potencial menor a uno mayor.
> - Es el **voltaje máximo** que la batería puede entregar entre sus terminales.
> - No es una fuerza: se mide en **volts**.

### <span style="color:#00bfbc">Voltaje terminal (fuente real)</span>
> [!tip]
> $$\Delta V = \varepsilon - Ir \quad \text{(V)}$$
> - $V$ = voltaje entre los terminales de la batería (V)
> - $\varepsilon$ = fuerza electromotriz (V)
> - $I$ = corriente del circuito (A)
> - $r$ = resistencia interna de la fuente (Ω)
> - El voltaje terminal es **menor que la FEM** por la caída $Ir$ en la resistencia interna.

### <span style="color:#7852ee">Fuente ideal</span>
> [!example]
> $$\varepsilon = V_{ab} = I \cdot R \quad \text{(V)}$$
> - Una fuente ideal **no tiene resistencia interna** ($r = 0$) y mantiene $\Delta V$ constante.
> - El aumento de potencial en la fuente es igual a la caída de potencial en el resto del circuito.

### <span style="color:#ec7500">Corriente total del circuito</span>
> [!question]
> $$I = \frac{\varepsilon}{R + r} \quad \text{(A)}$$
> - Se obtiene igualando $\Delta V = IR$ con $\Delta V = \varepsilon - Ir$ → $\varepsilon = I(R + r)$.
> - También se puede despejar $\varepsilon = I R + I r$ por **ley de mallas**.
> - Ejemplo: $\varepsilon = 12\,V$, $R = 4\,\Omega$, $r = 2\,\Omega$ → $I = \frac{12}{4+2} = 2\,A$.

### <span style="color:#9e9e9e">FEM de una pila</span>
> [!cite]
> - Las pilas generan energía eléctrica por **medios químicos** (celdas electroquímicas).
> - Transporte de electrones desde el **ánodo** (oxidación) al **cátodo** (reducción).
> - El trabajo es proporcional a la diferencia de potencial entre ánodo y cátodo.
> - Ejemplo: batería de plomo-ácido del automóvil (electrodos de plomo + ácido sulfúrico).

### <span style="color:#e93147">Potencial de contacto y FEM térmicas</span>
> [!danger]
> - **Potencial de contacto:** diferencia de potencial entre dos materiales en contacto, en ausencia de corriente.
> - Si no llega energía al sistema, los potenciales de contacto de las uniones **se compensan** ($V = 0$).
> - **FEM térmicas:** en sistemas de distribución, la c.a. se eleva con **transformadores** para el transporte y se reduce para el uso final.

📄 [[Unidad 3 - Circuitos de Corriente Continua 1.pdf|Ver PDF Unidad 3]]

---

# 🟢 Unidad 4 - Magnetismo

### <span style="color:#086ddd">Campo magnético</span>
> [!info]
> - Una carga o corriente móvil crea un **campo magnético $\vec{B}$** en el espacio circundante.
> - Su dirección es la que apuntaría el **polo norte de una brújula** en ese punto (sale del polo N, entra al polo S).
> - Las líneas de campo magnético siempre forman **espiras cerradas** (no existen polos magnéticos aislados).

### <span style="color:#00bfbc">Fuerza magnética sobre una carga en movimiento</span>
> [!tip]
> $$F = |q|\,v_{\perp} B \sin\phi \quad \text{(N)}$$
> - $|q|$ = magnitud de la carga (C), $v$ = rapidez (m/s), $B$ = campo magnético (T)
> - $\phi$ = ángulo entre $\vec{v}$ y $\vec{B}$
> - La fuerza es **proporcional a la carga, al campo y a la velocidad**.
> - Si $\vec{v} \parallel \vec{B}$ ($\phi = 0°$ o $180°$) → $F = 0$: una carga **en reposo no experimenta fuerza magnética**.
> - La fuerza es **perpendicular** al plano formado por $\vec{v}$ y $\vec{B}$ (regla de la mano derecha).

### <span style="color:#7852ee">Fuerza magnética (forma vectorial)</span>
> [!example]
> $$\vec{F} = q\,\vec{v} \times \vec{B} \quad \text{(N)}$$
> - Producto vectorial: $\vec{F} \perp \vec{v}$ y $\vec{F} \perp \vec{B}$.
> - Si $q > 0$: $\vec{F}$ tiene la dirección de $\vec{v} \times \vec{B}$; si $q < 0$: dirección opuesta.
> - **La fuerza magnética nunca hace trabajo** (no cambia la rapidez, solo la dirección).

### <span style="color:#ec7500">Unidades del campo magnético</span>
> [!question]
> $$1\,T = 1\,\frac{N}{A \cdot m} \qquad 1\,G = 10^{-4}\,T$$
> - Unidad SI: **tesla (T)**, en honor a Nikola Tesla.
> - Campo magnético terrestre: $\approx 10^{-4}\,T = 1\,G$.
> - Campos en átomos: $\approx 10\,T$; récord de laboratorio: $\approx 45\,T$.

### <span style="color:#ec7500">Ecuación de Lorentz</span>
> [!warning]
> $$\vec{F} = q\left(\vec{E} + \vec{v} \times \vec{B}\right) \quad \text{(N)}$$
> - Fuerza total sobre una carga que se mueve con campo eléctrico **y** magnético simultáneamente.
> - Es una de las **ecuaciones básicas de la física**.
> - Si $v = 0$ solo queda $F = qE$; si $E = 0$ solo queda $F = qvB\sin\phi$.

### <span style="color:#9e9e9e">Flujo magnético</span>
> [!cite]
> $$\Phi_B = \int B_\perp \, dA = \int B \cos\phi \, dA = \int \vec{B} \cdot d\vec{A} \quad \text{(Wb)}$$
> - Caso especial (**campo uniforme y superficie plana**):
> $$\Phi_B = BA\cos\phi \quad \text{(Wb)}$$
> - $\phi$ = ángulo entre $\vec{B}$ y la **normal** a la superficie.
> - Unidad: **weber** → $1\,Wb = 1\,T \cdot m^2 = 1\,\dfrac{N \cdot m}{A}$
> - El flujo es una **cantidad escalar**.

### <span style="color:#086ddd">Flujo magnético neto (superficie cerrada)</span>
> [!info]
> $$\oint \vec{B} \cdot d\vec{A} = 0 \quad \text{(Wb)}$$
> - **No existen monopolos magnéticos**: toda línea que entra a una superficie cerrada también sale.
> - De aquí se sigue que las líneas de campo magnético forman siempre **espiras cerradas**.

### <span style="color:#00bfbc">Movimiento circular de una carga</span>
> [!tip]
> $$F = |q|\,v\,B = m\frac{v^2}{R} \quad \text{(N)}$$
> - Si $\vec{v} \perp \vec{B}$, la fuerza magnética actúa como **fuerza centrípeta**.
> - La rapidez $v$ permanece **constante** (la fuerza es siempre perpendicular a $\vec{v}$).
> - Si $q$ es negativa, el movimiento es **horario**; si es positiva, **antihorario**.

### <span style="color:#7852ee">Radio de la órbita circular</span>
> [!example]
> $$R = \frac{mv}{|q|\,B} \quad \text{(m)}$$
> - Se despeja de $|q|vB = \dfrac{mv^2}{R}$.
> - Radio mayor para partículas más **masas** o más **rápidas**; menor para campos $B$ intensos.
> - En movimiento **helicoidal**, $v$ es la componente de la velocidad **perpendicular** a $\vec{B}$.

### <span style="color:#ec7500">Rapidez angular y frecuencia del ciclotrón</span>
> [!question]
> $$\omega = \frac{v}{R} = \frac{|q|\,B}{m} \quad \text{(rad/s)} \qquad f = \frac{\omega}{2\pi} \quad \text{(Hz)}$$
> - $\omega$ **no depende del radio**: todas las órbitas dan la misma rapidez angular.
> - $f$ se llama **frecuencia del ciclotrón** (base de los aceleradores de partículas y magnetrones).
> - Ejemplo horno de microondas: $f = 2450\,MHz$ → $\omega = 2\pi f = 1,54 \times 10^{10}\,s^{-1}$.

### <span style="color:#9e9e9e">Movimiento helicoidal</span>
> [!cite]
> - Si $\vec{v}$ **no es perpendicular** a $\vec{B}$, la componente paralela es constante (no hay fuerza en esa dirección).
> - Resultado: trayectoria en **hélice** (círculo + avance rectilíneo).
> - El radio de la hélice se calcula con $R = \dfrac{mv_\perp}{|q|B}$.

### <span style="color:#e93147">Fuerza magnética sobre un conductor recto</span>
> [!danger]
> $$\vec{F}_B = I\,\vec{L} \times \vec{B} \quad \text{(N)} \qquad F_B = ILB\sin\phi$$
> - $\vec{L}$ = vector longitud en la dirección de la corriente $I$.
> - Solo válida para un **segmento recto** en campo magnético **uniforme**.
> - $\phi = 90°$ ($\vec{L} \perp \vec{B}$) → fuerza máxima $F = ILB$; $\phi = 0°$ → $F = 0$.

### <span style="color:#e93147">Fuerza sobre un segmento arbitrario</span>
> [!danger]
> $$d\vec{F}_B = I\,d\vec{s} \times \vec{B} \qquad \vec{F}_B = I\int_a^b d\vec{s} \times \vec{B} \quad \text{(N)}$$
> - Se integra a lo largo de todo el alambre (que puede ser curvo).
> - La fuerza es **máxima** cuando $d\vec{s} \perp \vec{B}$ y **cero** cuando son paralelos.

### <span style="color:#086ddd">Fuerza neta sobre una espira cerrada</span>
> [!info]
> $$\vec{F}_1 + \vec{F}_2 = 0 \quad \text{(N)}$$
> - En un campo magnético **uniforme**, la fuerza neta sobre **cualquier espira cerrada** es cero.
> - La fuerza sobre un alambre **curvo** es igual a la de un alambre **recto** entre los mismos dos puntos.

### <span style="color:#7852ee">Ley de Biot y Savart</span>
> [!example]
> $$d\vec{B} = \frac{\mu_0}{4\pi}\,\frac{I\,d\vec{s} \times \hat{r}}{r^2} \quad \text{(T)}$$
> $$\vec{B} = \frac{\mu_0 I}{4\pi}\int \frac{d\vec{s} \times \hat{r}}{r^2} \quad \text{(T)}$$
> - $d\vec{B}$ es perpendicular a $d\vec{s}$ y al vector unitario $\hat{r}$ (producto cruz).
> - Su magnitud es proporcional a $I$, a $ds$ y a $\sin\phi$, e **inversamente proporcional a $r^2$**.
> - Para el campo total hay que **integrar** sobre toda la distribución de corriente.
> - Permeabilidad del espacio libre: $\mu_0 = 4\pi \times 10^{-7}\,\dfrac{T \cdot m}{A}$

### <span style="color:#ec7500">Alambre recto finito</span>
> [!question]
> $$B = \frac{\mu_0 I}{4\pi a}\left(\cos\phi_1 - \cos\phi_2\right) \quad \text{(T)}$$
> - $a$ = distancia perpendicular del punto al alambre.
> - $\phi_1, \phi_2$ = ángulos formados por los extremos del alambre con la perpendicular.
> - Dirección: **regla de la mano derecha** (líneas circulares alrededor del alambre).

### <span style="color:#ec7500">Alambre recto largo e infinito</span>
> [!warning]
> $$B = \frac{\mu_0 I}{2\pi a} \quad \text{(T)}$$
> - Caso límite del alambre finito: $\phi_1 = 0$ y $\phi_2 = \pi$.
> - $B$ es **inversamente proporcional** a la distancia $a$ al alambre.
> - Regla de la mano derecha: pulgar en el sentido de $I$, los dedos indican $\vec{B}$.

### <span style="color:#9e9e9e">Arco circular de corriente</span>
> [!cite]
> $$B = \frac{\mu_0 I}{4\pi a}\,\theta \quad \text{(T)}$$
> - $a$ = radio del arco, $\theta$ = ángulo subtendido **en radianes**.
> - Para un arco completo ($\theta = 2\pi$): $B = \dfrac{\mu_0 I}{2a}$.
> - Dirección: regla de la mano derecha (enrollar dedos en el sentido de $I$).

### <span style="color:#e93147">Espira circular (campo axial)</span>
> [!danger]
> $$B_x = \frac{\mu_0 I a^2}{2\left(a^2 + x^2\right)^{3/2}} \quad \text{(T)}$$
> - Campo en un punto del eje a distancia $x$ del centro de una espira de radio $a$.
> - Muy lejos ($x \gg a$): $B_x \approx \dfrac{\mu_0 I a^2}{2x^3}$
> - Las componentes perpendiculares al eje se **cancelan** por simetría; solo suma la axial.

### <span style="color:#e93147">Espira circular (en el centro)</span>
> [!danger]
> $$B = \frac{\mu_0 I}{2a} \quad \text{(T)}$$
> - Caso particular del campo axial con $x = 0$.
> - También vale para un **arco completo** ($\theta = 2\pi$).

### <span style="color:#00bfbc">Flujo a través de una espira rectangular</span>
close termina

### <span style="color:#ec7500">Fuerza entre dos alambres paralelos</span>
> [!warning]
> $$\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi a} \quad \text{(N/m)}$$
> - $a$ = distancia entre los alambres, $I_1, I_2$ = corrientes.
> - Corrientes en el **mismo sentido** → se **atraen**; en sentidos **opuestos** → se **repelen**.
> - Define el **ampere**: $F/L = 2\times10^{-7}\,N/m$ con $I_1 = I_2 = 1\,A$ y $a = 1\,m$.

### <span style="color:#7852ee">Ley de Ampère</span>
> [!example]
> $$\oint \vec{B} \cdot d\vec{s} = \mu_0 I \quad \text{(T·m)}$$
> - La integral de línea de $\vec{B}$ alrededor de **cualquier trayectoria cerrada** (espira amperiana) es $\mu_0 I$.
> - $I$ = corriente total que atraviesa la superficie limitada por la trayectoria.
> - Útil solo para configuraciones de corriente con **alto grado de simetría** (análogo a la ley de Gauss).

📄 [[Unidad 4 - Magnetismo.pdf|Ver PDF Unidad 4]]

---

# 📐 Constantes y Datos Útiles

| Constante | Símbolo | Valor |
|-----------|---------|-------|
| Permeabilidad del vacío | $\mu_0$ | $4\pi \times 10^{-7}\,T \cdot m/A$ |
| $\mu_0 / 4\pi$ | — | $10^{-7}\,T \cdot m/A$ |
| Carga elemental | $e$ | $1,6 \times 10^{-19}\,C$ |
| Masa del electrón | $m_e$ | $9,11 \times 10^{-31}\,kg$ |
| Masa del protón | $m_p$ | $1,67 \times 10^{-27}\,kg$ |
| Campo magnético terrestre | $B_T$ | $\approx 10^{-4}\,T = 1\,G$ |

---

# 🎯 Fórmulas Rápidas para Exámenes

### <span style="color:#00bfbc">Unidad 3 - Circuito RC y FEM</span>
> [!tip]
> 1. **Carga:** $q = Q_f\left(1 - e^{-t/RC}\right)$ (C)
> 2. **Corriente en carga:** $i = I_0\,e^{-t/RC}$ (A)
> 3. **Descarga:** $q = Q_0\,e^{-t/RC}$ (C)
> 4. **Constante de tiempo:** $\tau = RC$ (s)
> 5. **FEM:** $\varepsilon = W/q$ (V)
> 6. **Voltaje terminal:** $\Delta V = \varepsilon - Ir$ (V)
> 7. **Corriente total:** $I = \dfrac{\varepsilon}{R + r}$ (A)
> 8. **Fuente ideal:** $\varepsilon = IR$ (V)

### <span style="color:#00bfbc">Unidad 4 - Magnetismo</span>
> [!tip]
> 1. **Fuerza sobre carga:** $F = |q|vB\sin\phi$ (N) | $\vec{F} = q\vec{v} \times \vec{B}$
> 2. **Lorentz:** $\vec{F} = q(\vec{E} + \vec{v} \times \vec{B})$ (N)
> 3. **Flujo:** $\Phi_B = BA\cos\phi$ (Wb) | $\oint \vec{B} \cdot d\vec{A} = 0$
> 4. **Radio circular:** $R = \dfrac{mv}{|q|B}$ (m)
> 5. **Rapidez angular:** $\omega = \dfrac{|q|B}{m}$ (rad/s) | $f = \dfrac{\omega}{2\pi}$
> 6. **Fuerza sobre conductor:** $\vec{F} = I\vec{L} \times \vec{B}$ (N)
> 7. **Biot-Savart:** $d\vec{B} = \dfrac{\mu_0}{4\pi}\dfrac{I\,d\vec{s} \times \hat{r}}{r^2}$ (T)
> 8. **Alambre largo:** $B = \dfrac{\mu_0 I}{2\pi a}$ (T)
> 9. **Espira (centro):** $B = \dfrac{\mu_0 I}{2a}$ (T)
> 10. **Alambres paralelos:** $\dfrac{F}{L} = \dfrac{\mu_0 I_1 I_2}{2\pi a}$ (N/m)
> 11. **Ampère:** $\oint \vec{B} \cdot d\vec{s} = \mu_0 I$ (T·m)
