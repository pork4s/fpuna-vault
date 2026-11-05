# Fórmulas SP - Física 2 (Unidades 3 → 6)

> 📖 [[Unidad 3 - Circuitos de Corriente Continua 1.pdf|Unidad 3 - Circuitos de CC (1).pdf]] · [[Unidad 4 - Magnetismo.pdf|Unidad 4 - Magnetismo.pdf]] · [[Unidad 5 - Inducción Electromagnética.pdf|Unidad 5 - Inducción Electromagnética.pdf]] · [[Unidad 6 - Circuitos en corriente alterna.pdf|Unidad 6 - Circuitos en C.A.pdf]]

---

> [!note]- 📑 Índice
> ### [[#Unidad 3 - Circuito RC (hasta el fin de la Unidad 3)]]
> - [[#Circuito RC - Conceptos]]
> - [[#Carga de un capacitor]]
> - [[#Voltaje en la carga]]
> - [[#Corriente en la carga]]
> - [[#Constante de tiempo]]
> - [[#Descarga de un capacitor]]
> - [[#Corriente en la descarga]]
> - [[#Voltaje en la descarga]]
> - [[#Fuerza Electromotriz (FEM)]]
> - [[#Voltaje terminal (fuente real)]]
> - [[#Fuente ideal]]
> - [[#Corriente total del circuito]]
> - [[#FEM de una pila]]
> - [[#Potencial de contacto y FEM térmicas]]
>
> ### [[#Unidad 4 - Magnetismo]]
> - [[#Campo magnético]]
> - [[#Experiencia de Oersted]]
> - [[#Fuerza magnética sobre una carga en movimiento]]
> - [[#Fuerza magnética (forma vectorial)]]
> - [[#Unidades del campo magnético]]
> - [[#Ecuación de Lorentz]]
> - [[#Flujo magnético]]
> - [[#Flujo magnético neto (superficie cerrada)]]
> - [[#Movimiento circular de una carga]]
> - [[#Radio de la órbita circular]]
> - [[#Rapidez angular, período y frecuencia del ciclotrón]]
> - [[#Movimiento helicoidal]]
> - [[#Selector de velocidad]]
> - [[#Espectrómetro de masas]]
> - [[#Fuerza magnética sobre un conductor recto]]
> - [[#Fuerza sobre un segmento arbitrario]]
> - [[#Fuerza neta sobre una espira cerrada]]
> - [[#Momento de torsión sobre una espira]]
> - [[#Momento dipolar magnético]]
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
> ### [[#Unidad 5 - Inducción Electromagnética]]
> - [[#Flujo magnético (repaso)]]
> - [[#Experimentos de inducción]]
> - [[#Ley de Faraday]]
> - [[#Dirección de la fem inducida]]
> - [[#Ley de Lenz]]
> - [[#Autoinducción (fem autoinducida)]]
> - [[#Inductancia]]
> - [[#Circuito RL - Ley de Kirchhoff]]
> - [[#Corriente en la carga (RL con fuente)]]
> - [[#Corriente en la descarga (RL sin fuente)]]
> - [[#Constante de tiempo (RL)]]
> - [[#Energía en el campo magnético]]
>
> ### [[#Unidad 6 - Circuitos en Corriente Alterna]]
> - [[#Voltaje y corriente instantáneos]]
> - [[#Valores eficaces (rms)]]
> - [[#Resistencia en C.A.]]
> - [[#Inductor (bobina) en C.A.]]
> - [[#Condensador (capacitor) en C.A.]]
> - [[#Impedancia en un circuito RLC serie]]
> - [[#Ángulo de desfase]]
> - [[#Potencia instantánea]]
> - [[#Potencia activa (media)]]
> - [[#Potencia reactiva y aparente]]
> - [[#Factor de potencia]]
> - [[#Resonancia en un circuito RLC serie]]
> - [[#Transformador ideal]]
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

### <span style="color:#086ddd">Voltaje en la carga</span>
> [!info]
> $$v_C = \varepsilon\left(1 - e^{-\frac{t}{RC}}\right) \quad \text{(V)}$$
> - **Voltaje entre las placas del capacitor** en función del tiempo mientras se carga.
> - Se obtiene de $v_C = \dfrac{q}{C}$ (misma forma que la carga, con $Q_f = C\varepsilon$).
> - En $t = 0$: $v_C = 0$ (placas descargadas). En $t \to \infty$: $v_C \to \varepsilon$.
> - Ley de mallas: $\varepsilon = v_R + v_C$ (el voltaje de la fuente se reparte entre $R$ y $C$).

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

### <span style="color:#ec7500">Voltaje en la descarga</span>
> [!question]
> $$v_C = V_0\,e^{-\frac{t}{RC}} = \varepsilon\,e^{-\frac{t}{RC}} \quad \text{(V)}$$
> - **Voltaje entre las placas** del capacitor mientras se descarga ($V_0 = \dfrac{Q_0}{C}$ = voltaje inicial).
> - Decae **exponencialmente** hasta cero, con la misma constante de tiempo $\tau = RC$.
> - En $t = 0$: $v_C = V_0$. En $t \geq 5\tau$: $v_C \approx 0$.
> - En la descarga el capacitor actúa como fuente: $v_C = iR$ (en módulo).

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

### <span style="color:#9e9e9e">Experiencia de Oersted</span>
> [!cite]
> - **1820:** Hans Christian Oersted notó que al pasar corriente por un alambre cercano a una **brújula**, la aguja se desvía.
> - Demostró que la **corriente eléctrica genera un campo magnético** (nace el electromagnetismo).
> - Sin corriente la aguja apunta al **norte magnético**; con corriente se desvía y se orienta **tangente** a las líneas de $\vec{B}$.
> - $\vec{B}$ alrededor de un alambre: **círculos concéntricos** en el plano perpendicular al alambre (regla de la mano derecha: pulgar en el sentido de $I$).
> - Invierte el sentido de $I$ → la aguja se desvía al lado opuesto. El efecto es **reversible** (base de los motores eléctricos).

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

### <span style="color:#ec7500">Rapidez angular, período y frecuencia del ciclotrón</span>
> [!question]
> $$\omega = \frac{v}{R} = \frac{|q|\,B}{m} \quad \text{(rad/s)} \qquad T = \frac{2\pi}{\omega} = \frac{2\pi m}{|q|\,B} \quad \text{(s)} \qquad f = \frac{\omega}{2\pi} = \frac{1}{T} \quad \text{(Hz)}$$
> - $\omega$ **no depende del radio**: todas las órbitas dan la misma rapidez angular.
> - $T$ = **período** (tiempo que tarda en dar una vuelta completa); tampoco depende de $v$ ni de $R$.
> - $f$ se llama **frecuencia del ciclotrón** (base de los aceleradores de partículas y magnetrones).
> - Ejemplo horno de microondas: $f = 2450\,MHz$ → $\omega = 2\pi f = 1,54 \times 10^{10}\,s^{-1}$.

### <span style="color:#9e9e9e">Movimiento helicoidal</span>
> [!cite]
> - Si $\vec{v}$ **no es perpendicular** a $\vec{B}$, la componente paralela es constante (no hay fuerza en esa dirección).
> - Resultado: trayectoria en **hélice** (círculo + avance rectilíneo).
> - El radio de la hélice se calcula con $R = \dfrac{mv_\perp}{|q|B}$.

### <span style="color:#086ddd">Selector de velocidad</span>
> [!info]
> $$v = \frac{E}{B} \quad \text{(m/s)}$$
> - **Aplicación:** obtiene un haz de partículas con rapidez bien definida.
> - Se hace pasar el haz por una región con $\vec{E} \perp \vec{B}$ (campos **perpendiculares y cruzados**).
> - Las cargas sienten $F_E = qE$ y $F_B = qvB$ en **sentidos opuestos**: $F_{neta} = qE - qvB$.
> - Solo pasan **sin desviarse** las partículas con $qE = qvB$ → $v = \dfrac{E}{B}$.
> - Las demás se desvían y quedan **bloqueadas** (rendija/selectores de haces de iones).

### <span style="color:#00bfbc">Espectrómetro de masas</span>
> [!tip]
> $$R = \frac{mv}{|q|\,B} \quad \Rightarrow \quad m = \frac{|q|\,B\,R}{v} = \frac{|q|\,B^{2}R}{E} \quad \text{(kg)}$$
> - **Aplicación:** mide la masa de iones y átomos (identificación de isótopos).
> - Las partículas salen del **selector de velocidad** con $v = E/B$ y entran en una cámara con solo $\vec{B}$.
> - Allí giran en un **semicírculo** de radio $R = \dfrac{mv}{|q|B}$ y chocan en una placa registradora.
> - Despejando $m$ (o $\dfrac{m}{|q|} = \dfrac{B^2 R}{E}$) a partir del radio medido.
> - Mismo $v$: a mayor masa → mayor radio (se separan los isótopos).

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

### <span style="color:#00bfbc">Momento de torsión sobre una espira</span>
> [!tip]
> $$\vec{\tau} = \vec{\mu} \times \vec{B} \qquad \tau = N\,I\,A\,B\,\sin\theta \quad \text{(N·m)}$$
> - **Par (torsión)** que siente una espira con corriente colocada en un campo $\vec{B}$ **uniforme**.
> - **Donde:**
>   - $N$ = **número de vueltas (espiras)** de alambre que forman la bobina (si es una sola vuelta, $N = 1$)
>   - $I$ = corriente que circula por la espira (A)
>   - $A$ = **área** de la espira (m²)
>   - $B$ = campo magnético (T)
>   - $\theta$ = ángulo entre la **normal** a la espira y $\vec{B}$
> - La **fuerza neta es cero** (espira cerrada), pero el **par no**: hace girar la espira.
> - $\theta = 0°$ o $180°$ → $\tau = 0$ (equilibrio); $\theta = 90°$ → $\tau_{máx} = N I A B$.
> - La espira gira hasta alinear su normal con $\vec{B}$: base del **galvanómetro** y del **motor eléctrico**.

### <span style="color:#9e9e9e">Momento dipolar magnético</span>
> [!cite]
> $$\vec{\mu} = N\,I\,\vec{A} \qquad \mu = N\,I\,A \quad \text{(A·m}^2\text{)}$$
> - **Donde:** $N$ = **número de vueltas (espiras)** · $I$ = corriente (A) · $A$ = **área** de la espira (m²).
> - **Magnitud:** número de espiras × corriente × área de la espira.
> - **Dirección:** normal a la espira, por la regla de la mano derecha (dedos en el sentido de $I$, pulgar = $\vec{\mu}$).
> - Un imán o una espira con corriente se comportan como un **dipolo magnético** (par de polos N-S).
> - A distancias grandes el campo de cualquier distribución de corriente se parece al de un **dipolo**.
> - **Energía potencial:** $U = -\vec{\mu}\cdot\vec{B} = -\mu B\cos\theta$ (J), mínima cuando $\vec{\mu} \parallel \vec{B}$.

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
> [!tip]
> $$\Phi_B = \int \vec{B} \cdot d\vec{A} = \int_{r}^{r+a} \frac{\mu_0 I}{2\pi x}\,b\,dx = \frac{\mu_0 I\,b}{2\pi}\,\ln\left(\frac{r+a}{r}\right) \quad \text{(Wb)}$$
> - Espira rectangular de lados $a$ (ancho, **radial**) y $b$ (largo, **paralelo** al alambre), a distancia $r$ de un alambre largo con corriente $I$.
> - El campo $\vec{B} = \dfrac{\mu_0 I}{2\pi x}$ **no es uniforme**: depende de la distancia $x$ al alambre → hay que integrar.
> - $dA = b\,dx$ (tira paralela al alambre) y $\vec{B} \parallel d\vec{A}$ → $\cos\phi = 1$.
> - Si la espira está **lejos** del alambre ($r \gg a$): $\ln\left(1 + \dfrac{a}{r}\right) \approx \dfrac{a}{r}$ → $\Phi_B \approx \dfrac{\mu_0 I\,b\,a}{2\pi r} = B\,A$ (campo casi uniforme, $A = ab$).
> - Con $N$ vueltas (**número de espiras** de la bobina): $\Phi_B = \dfrac{\mu_0 N I\,b}{2\pi}\,\ln\left(\dfrac{r+a}{r}\right)$.
> - En campo **uniforme** con $N$ vueltas rotando: $\Phi_B = NBA\cos\theta$ (Wb).

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

# 🔵 Unidad 5 - Inducción Electromagnética

### <span style="color:#086ddd">Flujo magnético (repaso)</span>
> [!info]
> $$\Phi_B = \int \vec{B} \cdot d\vec{A} = BA\cos\theta \quad \text{(Wb)}$$
> - $\theta$ = ángulo entre $\vec{B}$ y la **normal** a la superficie.
> - El flujo a través de una **superficie cerrada** es siempre cero ($\oint \vec{B} \cdot d\vec{A} = 0$).
> - En una superficie **abierta** el flujo no depende de su forma, sino solo de la **curva que la limita**.
> - Según **Faraday (1831)**, los efectos eléctricos producto de un fenómeno magnético aparecen por la **variación temporal** de los campos magnéticos.

### <span style="color:#9e9e9e">Experimentos de inducción</span>
> [!cite]
> - Imán **inmóvil** junto a la bobina → el galvanómetro marca **cero** (no hay fuente de fem en el circuito).
> - Imán **en movimiento** (o la bobina, o una segunda bobina con corriente variable) → aparece **corriente inducida**.
> - La fem que la genera se llama **fem inducida**: solo existe **mientras el flujo magnético cambia**.
> - Si el imán se detiene, la corriente inducida **cesa** (no hay trabajo → no hay energía).

### <span style="color:#00bfbc">Ley de Faraday</span>
> [!tip]
> $$\varepsilon = -\frac{d\Phi_B}{dt} \quad \text{(V)} \qquad \qquad \varepsilon = -N\,\frac{d\Phi_B}{dt} \quad \text{(V)}$$
> - "La **fem inducida** en una espira cerrada es igual al **negativo de la tasa de cambio** del flujo magnético a través de la espira."
> - $N$ = número de espiras de la bobina (si el flujo varía igual a través de cada espira, la tasa total es $N$ veces mayor).
> - El signo **menos** es la expresión de la **ley de Lenz**.
> - Si el flujo varía linealmente: $\varepsilon = N\,A\,\dfrac{\Delta B}{\Delta t}$.
> - Ejemplo: $N = 200$ vueltas, cuadrado de lado $l = 18\,cm$, $B$ de $0$ a $0,5\,T$ en $0,8\,s$ → $\varepsilon = 200 \cdot (0,18)^2 \cdot \dfrac{0,5}{0,8} = 4,05\,V$.

### <span style="color:#7852ee">Dirección de la fem inducida</span>
> [!example]
> - Elegir una **dirección positiva** para el vector de área $\vec{A}$.
> - A partir de $\vec{A}$ y $\vec{B}$ se determina el signo del flujo $\Phi_B$ y de su tasa de cambio $d\Phi_B/dt$.
> - Si el flujo **crece** ($d\Phi_B/dt > 0$) → la fem o corriente inducida es **negativa**.
> - Si el flujo **decrece** ($d\Phi_B/dt < 0$) → la fem o corriente inducida es **positiva**.

### <span style="color:#ec7500">Ley de Lenz</span>
> [!question]
> - "La polaridad de la fem inducida es tal que tiende a producir una corriente que crea un flujo magnético que **se opone al cambio** del flujo a través del área encerrada por el bucle."
> - La corriente inducida tiende a **mantener el flujo magnético original** a través del circuito.
> - Polo **norte** se acerca a la espira → la cara enfrentada se hace **Norte** (repulsión). El norte **se aleja** → se genera un **Sur** (atracción).
> - Solo **manteniendo el movimiento relativo** persisten las corrientes inducidas.
> - Es consecuencia del principio de **conservación de la energía**: el trabajo realizado contra las fuerzas magnéticas suministra la energía de la corriente inducida.

### <span style="color:#e93147">Autoinducción (fem autoinducida)</span>
> [!danger]
> $$\varepsilon_L = -L\,\frac{di}{dt} \quad \text{(V)}$$
> - Al cerrar el interruptor, la corriente **no salta** instantáneamente de $0$ a $\varepsilon/R$: el flujo creciente genera una fem que se **opone** a la de la batería.
> - También llamada **fuerza contraelectromotriz**.
> - Se llama **autoinducción** porque el flujo variable y la fem inducida surgen del **mismo circuito**.
> - La fem autoinducida es siempre proporcional a la **rapidez de cambio de la corriente**.

### <span style="color:#9e9e9e">Inductancia</span>
> [!cite]
> $$L = \frac{N\,\Phi_B}{i} = -\frac{\varepsilon_L}{di/dt} \quad \text{(H)}$$
> - $L$ = **inductancia** (autoinductancia) de la espira o bobina; depende de la **geometría** y de otras características físicas.
> - Análoga a la resistencia ($R = \Delta V/I$): la inductancia es una medida de **oposición a un cambio en la corriente**.
> - Unidad SI: **henry (H)** → $1\,H = 1\,\dfrac{V \cdot s}{A}$
> - Para una bobina de $N$ vueltas (toroide o solenoide ideal) se supone que el **mismo flujo** atraviesa cada vuelta.
> - Al igual que $R$ y $C$, $L$ depende de la **geometría** del inductor.

### <span style="color:#086ddd">Circuito RL - Ley de Kirchhoff</span>
> [!info]
> $$\varepsilon - iR - L\,\frac{di}{dt} = 0 \quad \text{(con fuente)} \qquad\qquad iR + L\,\frac{di}{dt} = 0 \quad \text{(sin fuente)}$$
> - Recorriendo el circuito en el sentido de las manecillas del reloj: $\varepsilon - V_R - V_L = 0$.
> - Con $V_R = iR$ y $V_L = -\varepsilon_L = L\,\dfrac{di}{dt}$ se obtiene la ecuación anterior.
> - Es una **ecuación diferencial** cuya solución da la corriente en función del tiempo.

### <span style="color:#00bfbc">Corriente en la carga (RL con fuente)</span>
> [!tip]
> $$i = \frac{\varepsilon}{R}\left(1 - e^{-\frac{R}{L}\,t}\right) = I_0\left(1 - e^{-\frac{t}{\tau}}\right) \quad \text{(A)}$$
> - Al cerrar el interruptor, la corriente crece **exponencialmente** hasta su valor de equilibrio.
> - Corriente máxima (equilibrio): $I_0 = \dfrac{\varepsilon}{R}$ (mismo valor que sin inductor).
> - En $t = 0$: $i = 0$. En $t \to \infty$: $i \to \dfrac{\varepsilon}{R}$ (en estado estacionario el inductor actúa como **cortocircuito**).
> - Sin inductor la corriente saltaría **instantáneamente**; con $L$ el aumento es **gradual**.

### <span style="color:#7852ee">Corriente en la descarga (RL sin fuente)</span>
> [!example]
> $$i = \frac{\varepsilon}{R}\,e^{-\frac{R}{L}\,t} = I_0\,e^{-\frac{t}{\tau}} \quad \text{(A)}$$
> - Cuando se anula la fuente de tensión, la corriente decae **exponencialmente** desde $I_0 = \dfrac{\varepsilon}{R}$ hasta cero.
> - El inductor se opone a la **disminución** de la corriente: la mantiene circulando un tiempo.
> - Sin inductor la corriente caería a cero **de inmediato**; con $L$ la caída es **exponencial**.

### <span style="color:#ec7500">Constante de tiempo (RL)</span>
> [!warning]
> $$\tau = \frac{L}{R} \quad \text{(s)}$$
> - Intervalo de tiempo necesario para que $i$ alcance el **63,2 %** de su valor máximo (o disminuya un 63,2 % de su valor máximo).
> - $L$ en henry y $R$ en ohmios → $\tau$ en segundos.
> - Para $t \geq 5\tau$ se considera que la corriente alcanzó (o llegó a cero) su valor de equilibrio.

### <span style="color:#e93147">Energía en el campo magnético</span>
> [!danger]
> $$\frac{dU_B}{dt} = L\,i\,\frac{di}{dt} \qquad\qquad U_B = \frac{1}{2}\,L\,i^2 \quad \text{(J)}$$
> - Multiplicando la ecuación de Kirchhoff por $i$: $i\varepsilon - i^2R - L\,i\,\dfrac{di}{dt} = 0$.
> - $i\varepsilon$ = potencia suministrada por la batería · $i^2R$ = potencia entregada al resistor · $L\,i\,\dfrac{di}{dt}$ = rapidez con que se **almacena energía en el inductor**.
> - Integrando ($P = dU_B/dt$): la energía queda almacenada en el **campo magnético** de la bobina.
> - Al descargarse, esa energía aparece como energía interna en el resistor.

📄 [[Unidad 5 - Inducción Electromagnética.pdf|Ver PDF Unidad 5]]

---

# 🟠 Unidad 6 - Circuitos en Corriente Alterna

### <span style="color:#086ddd">Voltaje y corriente instantáneos</span>
> [!info]
> $$v(t) = V_{máx}\,\text{sen}\,\omega t = V_{máx}\,\text{sen}\,2\pi f t \quad \text{(V)}$$
> $$i(t) = I_{máx}\,\text{sen}\,\omega t = I_{máx}\,\text{sen}\,2\pi f t \quad \text{(A)}$$
> - $\omega = 2\pi f = \dfrac{2\pi}{T}$ (rad/s) · $f$ = frecuencia (Hz) · $T$ = período (s).
> - En c.a. los voltajes y corrientes varían **senoidalmente** con el tiempo (fasor que gira 360°).
> - $V_{máx}$, $I_{máx}$ = valores **pico** (máximos) que alcanza la amplitud.
> - $v(t)$, $i(t)$ = valores en cualquier instante de tiempo.

### <span style="color:#9e9e9e">Valores eficaces (rms)</span>
> [!cite]
> $$V_{ef} = \frac{V_{máx}}{\sqrt{2}} = 0,707\,V_{máx} \quad \text{(V)} \qquad I_{ef} = \frac{I_{máx}}{\sqrt{2}} = 0,707\,I_{máx} \quad \text{(A)}$$
> - **Valor cuadrático medio** (rms): valor de una corriente constante que produce el **mismo efecto térmico** en la misma resistencia.
> - Es el valor que normalmente se suministra en la red: cuando se indica un voltaje o corriente, se refiere al **eficaz**.
> - Valor **medio** de una onda senoidal: $I_{medio} = \dfrac{2}{\pi}\,I_{máx} = 0,637\,I_{máx}$.
> - Valor **pico-pico**: $V_{pp} = 2\,V_{máx}$ (distancia entre el máximo y el mínimo de la onda).

### <span style="color:#00bfbc">Resistencia en C.A.</span>
> [!tip]
> $$I_{máx} = \frac{V_{máx}}{R} \qquad v_R = V_R\,\text{sen}\,2\pi f t \quad \text{con } V_R = I_{máx}\,R \quad \text{(V)}$$
> - Circuito **resistivo puro**: la corriente sigue la ley de Ohm en cada instante, $v_R = i(t)\,R$.
> - Voltaje y corriente están **en fase**: no existe ángulo de desfase entre ambos ($\varphi = 0°$).
> - En el diagrama de fasores, ambos fasores apuntan en la **misma línea**.
> - $V_R$ = amplitud máxima del voltaje sobre el resistor.

### <span style="color:#7852ee">Inductor (bobina) en C.A.</span>
> [!example]
> $$X_L = \omega L = 2\pi f L \quad (\Omega) \qquad V_L = I_{máx}\,X_L \quad \text{(V)}$$
> $$v_L = V_L\,\text{sen}\,(2\pi f t + 90°)$$
> - $X_L$ = **reactancia inductiva**: oposición al **cambio** de la corriente (no disipa energía: la acumula en su campo magnético).
> - Es **directamente proporcional** a la frecuencia y a la inductancia: si aumenta $f$ o $L$, aumenta $X_L$ y disminuye la corriente.
> - El voltaje sobre la bobina **adelanta 90°** respecto de la corriente (la corriente atrasa 90° respecto al voltaje).
> - En bobinas ideales ($R$ despreciable) el desfase es exactamente 90°.
> - Unidad de $X_L$: **ohmio** ($\Omega$).

### <span style="color:#ec7500">Condensador (capacitor) en C.A.</span>
> [!question]
> $$X_C = \frac{1}{\omega C} = \frac{1}{2\pi f C} \quad (\Omega) \qquad V_C = I_{máx}\,X_C \quad \text{(V)}$$
> $$v_C = V_C\,\text{sen}\,(2\pi f t - 90°)$$
> - $X_C$ = **reactancia capacitiva**: oposición al aumento del voltaje (el capacitor "frena" su carga).
> - Es **inversamente proporcional** a la frecuencia y a la capacitancia: si aumenta $f$ o $C$, disminuye $X_C$ y aumenta la corriente.
> - El voltaje sobre el capacitor **atrasa 90°** respecto de la corriente.
> - Unidad de $X_C$: **ohmio** ($\Omega$).

### <span style="color:#e93147">Impedancia en un circuito RLC serie</span>
> [!danger]
> $$Z = \sqrt{R^2 + \left(X_L - X_C\right)^2} \quad (\Omega) \qquad V = I\,Z \quad \text{(V)}$$
> - $Z$ = **impedancia**: efecto combinado de $R$, $L$ y $C$ (oposición real de la resistencia más las oposiciones aparentes de bobina y capacitor).
> - Reactancia neta: $X = X_L - X_C$.
> - Representación con **números complejos**: eje real = $R$, eje imaginario = $X$.
> - Las bobinas y condensadores **reales** tienen una resistencia asociada (en serie en las bobinas, en paralelo en los condensadores).
> - Por el teorema de Pitágoras en el diagrama de fasores: $V = \sqrt{V_R^2 + (V_L - V_C)^2} = I\sqrt{R^2 + (X_L - X_C)^2}$.
> - Amplitud máxima de la corriente: $I_{máx} = \dfrac{V_{máx}}{Z}$.

### <span style="color:#e93147">Ángulo de desfase</span>
> [!danger]
> $$\tan\varphi = \frac{X}{R} = \frac{X_L - X_C}{R} = \frac{2\pi f L - \dfrac{1}{2\pi f C}}{R} \qquad \varphi = \arctan\left(\frac{X_L - X_C}{R}\right)$$
> $$i(t) = I_{máx}\,\text{sen}\,(\omega t - \varphi) = I_{máx}\,\text{sen}\,(2\pi f t - \varphi)$$
> - $\varphi$ = ángulo de desfase entre el fasor **voltaje** y el fasor **corriente**.
> - $X_L > X_C$ → circuito **inductivo** ($\varphi > 0$); $X_C > X_L$ → circuito **capacitivo** ($\varphi < 0$).
> - En circuito resistivo puro o en resonancia: $\varphi = 0$.

### <span style="color:#086ddd">Potencia instantánea</span>
> [!info]
> $$p(t) = v(t)\,i(t) = \left(V_{máx}\,\text{sen}\,2\pi f t\right)\left(I_{máx}\,\text{sen}\,2\pi f t\right) \quad \text{(W)}$$
> - El área de los ciclos positivos de la curva $p(t)$ es **mayor** que la de los negativos → la **potencia media es positiva**.
> - Se promedia sobre un intervalo de tiempo igual a un **período** para obtener la potencia activa.

### <span style="color:#00bfbc">Potencia activa (media)</span>
> [!tip]
> $$P = \frac{1}{2}\,V_{máx}\,I_{máx} = V_{ef}\,I_{ef}\,\cos\varphi \quad \text{(W)}$$
> - Potencia **efectivamente** suministrada por la fuente o consumida en el circuito.
> - Depende de las amplitudes de voltaje y corriente y de la **diferencia de fase** ($\cos\varphi$).
> - Se mide con **vatímetros**, en **vatios** (W).

### <span style="color:#7852ee">Potencia reactiva y aparente</span>
> [!example]
> $$Q = V_{ef}\,I_{ef}\,\sin\varphi \quad \text{(VAR)} \qquad S = V_{ef}\,I_{ef} \quad \text{(VA)}$$
> $$S^2 = P^2 + Q^2 \qquad S = \sqrt{P^2 + Q^2}$$
> - $Q$ = potencia **reactiva**: consumida por bobinas y condensadores; se mide con **varímetros**, en **VAR**.
> - $S$ = potencia **aparente** o total: suma vectorial de las potencias activa y reactiva; se expresa como $V \times I$, en **voltios-amperios (VA)**.
> - En el **triángulo de potencias**: $P$ = cateto horizontal, $Q$ = cateto vertical, $S$ = hipotenusa.

### <span style="color:#ec7500">Factor de potencia</span>
> [!warning]
> $$fp = \frac{P}{S} = \cos\varphi \qquad (0 \leq fp \leq 1)$$
> - Relación entre la potencia **activa** $P$ y la **aparente** $S$; es el factor por el que se multiplica $S$ para obtener $P$.
> - Es **adimensional** e igual al **coseno** del ángulo entre los fasores de corriente y tensión.
> - Se mide con el **cosímetro**. Valor ideal: $fp = 1$ (carga resistiva pura, $P = S$).
> - $fp < 1$ → se necesita **mayor consumo de energía** para producir el mismo trabajo útil.
> - **Efectos de un fp bajo:** aumentan las pérdidas $I^2R$ en las redes, aumentan las caídas de tensión $I \cdot R$ y aumenta la carga en generadores, transformadores y líneas.

### <span style="color:#e93147">Resonancia en un circuito RLC serie</span>
> [!danger]
> $$X_L = X_C \;\Rightarrow\; 2\pi f L = \frac{1}{2\pi f C} \;\Rightarrow\; f = \frac{1}{2\pi\sqrt{LC}} \quad \text{(Hz)} \qquad \omega = \frac{1}{\sqrt{LC}} \quad \text{(rad/s)}$$
> - Ocurre cuando las reactancias **se cancelan** ($X_L = X_C$): la amplitud de la corriente alcanza su **valor máximo**.
> - En resonancia: $Z = R$ (valor mínimo), $\varphi = 0$ → $I_{máx} = \dfrac{V_{máx}}{R}$.
> - Base de los circuitos de **sintonización** (receptores de radio): si $f$ de la señal = $f$ de resonancia, la corriente es máxima.

### <span style="color:#9e9e9e">Transformador ideal</span>
> [!cite]
> $$\frac{\varepsilon_1}{\varepsilon_2} = \frac{N_1}{N_2} \qquad \frac{V_2}{V_1} = \frac{N_2}{N_1} \qquad V_1\,I_1 = V_2\,I_2$$
> - $N_1$, $N_2$ = número de vueltas de los arrollamientos **primario** y **secundario**.
> - $\varepsilon_1$, $\varepsilon_2$ = fem inducidas en las bobinas primaria y secundaria.
> - En el transformador **ideal** (sin pérdidas óhmicas en los arrollamientos): $V_1 I_1 = V_2 I_2$.
> - $N_2 > N_1$ → **eleva** la tensión; $N_2 < N_1$ → **reduce** la tensión.
> - Solo funciona en **c.a.** (requiere campo magnético variable): permite transportar energía a largas distancias en alta tensión y reducirla para el consumo.

📄 [[Unidad 6 - Circuitos en corriente alterna.pdf|Ver PDF Unidad 6]]

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

### <span style="color:#00bfbc">Unidad 5 - Inducción Electromagnética</span>
> [!tip]
> 1. **Faraday:** $\varepsilon = -\dfrac{d\Phi_B}{dt}$ (V) | con $N$ espiras: $\varepsilon = -N\dfrac{d\Phi_B}{dt}$
> 2. **Lenz:** la corriente inducida crea un flujo que se **opone al cambio** del flujo original.
> 3. **Fem autoinducida:** $\varepsilon_L = -L\dfrac{di}{dt}$ (V)
> 4. **Inductancia:** $L = \dfrac{N\Phi_B}{i} = -\dfrac{\varepsilon_L}{di/dt}$ (H) | $1\,H = 1\,V \cdot s/A$
> 5. **Circuito RL (Kirchhoff):** $\varepsilon - iR - L\dfrac{di}{dt} = 0$
> 6. **Carga RL:** $i = \dfrac{\varepsilon}{R}\left(1 - e^{-Rt/L}\right)$ (A) | $I_0 = \dfrac{\varepsilon}{R}$
> 7. **Descarga RL:** $i = I_0\,e^{-Rt/L}$ (A)
> 8. **Constante de tiempo:** $\tau = \dfrac{L}{R}$ (s)
> 9. **Energía en el inductor:** $U_B = \dfrac{1}{2}Li^2$ (J)

### <span style="color:#00bfbc">Unidad 6 - Circuitos en Corriente Alterna</span>
> [!tip]
> 1. **Voltaje instantáneo:** $v(t) = V_{máx}\,\text{sen}\,2\pi f t$ (V) | $i(t) = I_{máx}\,\text{sen}\,2\pi f t$ (A)
> 2. **Valores eficaces:** $V_{ef} = \dfrac{V_{máx}}{\sqrt{2}} = 0,707\,V_{máx}$ (V) | $I_{ef} = \dfrac{I_{máx}}{\sqrt{2}}$ (A)
> 3. **Valor medio:** $I_{medio} = \dfrac{2}{\pi}I_{máx} = 0,637\,I_{máx}$
> 4. **Resistencia en fase:** $I_{máx} = \dfrac{V_{máx}}{R}$ | $\varphi = 0°$
> 5. **Reactancia inductiva:** $X_L = 2\pi f L$ ($\Omega$) | voltaje adelanta 90°
> 6. **Reactancia capacitiva:** $X_C = \dfrac{1}{2\pi f C}$ ($\Omega$) | voltaje atrasa 90°
> 7. **Impedancia (RLC serie):** $Z = \sqrt{R^2 + (X_L - X_C)^2}$ ($\Omega$) | $V = IZ$
> 8. **Desfase:** $\tan\varphi = \dfrac{X_L - X_C}{R}$ | $i(t) = I_{máx}\,\text{sen}\,(2\pi f t - \varphi)$
> 9. **Potencia activa:** $P = \dfrac{1}{2}V_{máx}I_{máx} = V_{ef}I_{ef}\cos\varphi$ (W)
> 10. **Potencias reactiva y aparente:** $Q = V_{ef}I_{ef}\sin\varphi$ (VAR) | $S = V_{ef}I_{ef}$ (VA) | $S^2 = P^2 + Q^2$
> 11. **Factor de potencia:** $fp = \dfrac{P}{S} = \cos\varphi$ ($0 \leq fp \leq 1$)
> 12. **Resonancia:** $X_L = X_C$ → $f = \dfrac{1}{2\pi\sqrt{LC}}$ (Hz) | $Z = R$ (mínimo)
> 13. **Transformador:** $\dfrac{V_2}{V_1} = \dfrac{N_2}{N_1}$ | $V_1 I_1 = V_2 I_2$
