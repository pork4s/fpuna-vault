# Fórmulas SP - Cálculo Integral · Aplicaciones de la integral

> 📖 [[Larson - Calculo de una variable.pdf|Larson - Cálculo de una variable (Cap. 7)]] · [[Santiago y otros - Cálculo Integral para ingeniería.pdf|Santiago - Cálculo Integral para ingeniería (Unidad 3)]]

---

> [!note]- 📑 Índice
> ### [[#🔴 Área entre curvas]]
> - [[#Área entre dos curvas (rectángulos verticales)]]
> - [[#Curvas que se intersecan]]
> - [[#Área con rectángulos horizontales (integración en y)]]
> - [[#¿Cuándo integrar en x o en y?]]
>
> ### [[#🔵 Longitud de arco]]
> - [[#Elemento diferencial de arco (ds)]]
> - [[#Longitud de arco en función de x]]
> - [[#Longitud de arco en función de y]]
> - [[#Longitud de arco con ecuaciones paramétricas]]
> - [[#Notas sobre longitud de arco]]
>
> ### [[#🟢 Área de superficies de revolución]]
> - [[#Superficie al girar alrededor del eje x]]
> - [[#Superficie al girar alrededor del eje y]]
> - [[#Superficie con la curva expresada en función de y]]
> - [[#Forma general de la superficie de revolución]]
>
> ### [[#🟣 Volumen]]
> - [[#Volumen por el método de los discos]]
> - [[#Volumen por el método de las arandelas (anillos)]]
> - [[#Volumen por el método de las capas (cáscaras cilíndricas)]]
> - [[#Volumen de sólidos con secciones transversales conocidas]]
> - [[#Cómo elegir el método]]
>
> ### [[#📐 Datos de apoyo]] · [[#🎯 Fórmulas rápidas para exámenes]]

---

# 🔴 Área entre curvas

### <span style="color:#086ddd">Área entre dos curvas (rectángulos verticales)</span>
> [!info]
> $$A = \int_a^b \left[ f(x) - g(x) \right] dx$$
> - $f(x)$ = curva **superior**, $g(x)$ = curva **inferior**, ambas continuas en $[a, b]$.
> - $a$ y $b$ = rectas verticales laterales ($x = a$, $x = b$).
> - Altura del rectángulo representativo: $f(x) - g(x)$; anchura: $dx$.
> - También: $A = \displaystyle\int_a^b f(x)\,dx - \int_a^b g(x)\,dx$ (área bajo $f$ menos área bajo $g$).
> - 📄 Santiago, fórmula (3.1): $A = \displaystyle\int_a^b [f(x) - g(x)]\,dx$

### <span style="color:#00bfbc">Curvas que se intersecan</span>
> [!tip]
> $$A = \int_a^b \left| f(x) - g(x) \right| dx = \sum_{i} \int_{x_i}^{x_{i+1}} \left| f(x) - g(x) \right| dx$$
> - Igualar $f(x) = g(x)$ para hallar **todos los puntos de intersección** $x_1, x_2, \dots, x_n$.
> - En cada subintervalo verificar **cuál curva va arriba**; si cambian de orden, se parte la integral.
> - ⚠️ Si se integra de un extremo al otro sin partir, el resultado puede dar **0 o negativo**.
> - Ejemplo (Larson 7.1): $f(x) = 3x^3 - x^2 - 10x$, $g(x) = -x^2 + 2x$ → cruces en $x = -2, 0, 2$ → dos integrales.
> - 📄 Santiago, fórmula (3.2): $A = \displaystyle\int_a^b |f(x) - g(x)|\,dx$

### <span style="color:#7852ee">Área con rectángulos horizontales (integración en y)</span>
> [!example]
> $$A = \int_c^d \left[ f(y) - g(y) \right] dy$$
> - $f(y)$ = curva **de la derecha**, $g(y)$ = curva **de la izquierda**.
> - $c$ y $d$ = rectas horizontales laterales ($y = c$, $y = d$).
> - Se usa cuando la frontera es $x = \dots$ en función de $y$, o cuando integrar en $x$ obligaría a **varias integrales**.
> - 📄 Santiago, fórmulas (3.3) y (3.4):
>   - Sin intersección: $A = \displaystyle\int_c^d [f(y) - g(y)]\,dy$
>   - Con intersección: $A = \displaystyle\int_c^d |f(y) - g(y)|\,dy$

### <span style="color:#ec7500">¿Cuándo integrar en x o en y?</span>
> [!question]
> | Rectángulo | Ancho | Integral | Resta |
> |---|---|---|---|
> | **Vertical** | $dx$ | en $x$ | **arriba − abajo** |
> | **Horizontal** | $dy$ | en $y$ | **derecha − izquierda** |
> - Si la curva frontera cambia a lo largo del intervalo → **más de una integral**.
> - Elegir la variable que haga **una sola integral** con radios/funciones bien definidas.
> - Proceso (Santiago, Tabla 3.2): 1) dibujar la región, 2) hallar cruces, 3) elegir variable, 4) integrar.

---

# 🔵 Longitud de arco

### <span style="color:#086ddd">Elemento diferencial de arco (ds)</span>
> [!info]
> $$ds = \sqrt{1 + \left( \frac{dy}{dx} \right)^{2}}\, dx = \sqrt{1 + \big[ f'(x) \big]^{2}}\, dx$$
> $$ds = \sqrt{\left( \frac{dx}{dy} \right)^{2} + 1}\, dy = \sqrt{\big[ g'(y) \big]^{2} + 1}\, dy$$
> - Viene de la suma de rectángulos: $\Delta L_i = \sqrt{(\Delta x_i)^2 + (\Delta y_i)^2}$.
> - Es la generalización del teorema de Pitágoras a una curva suave.

### <span style="color:#00bfbc">Longitud de arco en función de x</span>
> [!tip]
> $$s = \int_a^b \sqrt{1 + \big[ f'(x) \big]^{2}}\, dx = \int_a^b \sqrt{1 + \left( \frac{dy}{dx} \right)^{2}} dx$$
> - Curva $y = f(x)$ suave en $[a, b]$ (derivada continua).
> - 📄 Santiago, fórmula (3.5): $L = \displaystyle\int_a^b \sqrt{1 + \left(\frac{dy}{dx}\right)^2}\,dx$
> - Caso recta: $f'(x) = m$ constante → $s = \displaystyle\int_{x_1}^{x_2} \sqrt{1+m^2}\,dx = \sqrt{(\Delta x)^2 + (\Delta y)^2}$ (distancia).

### <span style="color:#7852ee">Longitud de arco en función de y</span>
> [!example]
> $$s = \int_c^d \sqrt{1 + \big[ g'(y) \big]^{2}}\, dy = \int_c^d \sqrt{1 + \left( \frac{dx}{dy} \right)^{2}} dy$$
> - Curva $x = g(y)$ suave en $[c, d]$.
> - 📄 Santiago, fórmula (3.6): $L = \displaystyle\int_c^d \sqrt{1 + \left(\frac{dx}{dy}\right)^2}\,dy$
> - Conviene usarla cuando despejar $y$ en función de $x$ es difícil.

### <span style="color:#ec7500">Longitud de arco con ecuaciones paramétricas</span>
> [!question]
> $$L = \int_a^b \sqrt{\left( \frac{dx}{dt} \right)^{2} + \left( \frac{dy}{dt} \right)^{2}}\, dt$$
> - Para curvas $x = f(t)$, $y = g(t)$ con $t$ entre $a$ y $b$.
> - 📄 Santiago, fórmula (3.7).
> - Ejemplo: $x = e^t\cos t - 1$, $y = e^t \sin t$ → $\left(\dfrac{dx}{dt}\right)^2 + \left(\dfrac{dy}{dt}\right)^2 = 2e^{2t}$.

### <span style="color:#9e9e9e">Notas sobre longitud de arco</span>
> [!cite]
> - Muchas integrales de arco **no tienen antiderivada elemental** → usar **integración numérica** (trapecios, Simpson) o calculadora.
> - Formas equivalentes frecuentes:
>   - $s = \displaystyle\int \sqrt{1 + \left(\frac{dy}{dx}\right)^2}\,dx \qquad s = \displaystyle\int \sqrt{\left(\frac{dx}{dy}\right)^2 + 1}\,dy$
> - Catenaria $y = \dfrac{a}{2}\left(e^{x/a} + e^{-x/a}\right) = a\cosh\dfrac{x}{a}$ → $s = \displaystyle\int_a^b \cosh\dfrac{x}{a}\,dx = a\,\sinh\dfrac{x}{a}\Big|_a^b$
> - Utilidad: calcular la **longitud de un cable, una pista o la trayectoria** de una partícula.

---

# 🟢 Área de superficies de revolución

### <span style="color:#086ddd">Superficie al girar alrededor del eje x</span>
> [!info]
> $$S = 2\pi \int_a^b f(x)\, \sqrt{1 + \big[ f'(x) \big]^{2}}\, dx = 2\pi \int_a^b y\, ds$$
> - Curva $y = f(x)$ girada alrededor del **eje x** entre $x = a$ y $x = b$.
> - $r(x) = f(x)$ = distancia de la curva al eje de rotación.
> - 📄 Santiago, fórmula (3.8): $S = \displaystyle\int_a^b 2\pi y \sqrt{1 + \left(\frac{dy}{dx}\right)^2}\,dx$
> - Derivada de ejemplo: $y = \sqrt{x}$, $f'(x) = \dfrac{1}{2\sqrt{x}}$ → $S = 2\pi\displaystyle\int_0^b \sqrt{x}\,\sqrt{1+\tfrac{1}{4x}}\;dx$

### <span style="color:#00bfbc">Superficie al girar alrededor del eje y</span>
> [!tip]
> $$S = 2\pi \int_a^b x\, \sqrt{1 + \big[ f'(x) \big]^{2}}\, dx = 2\pi \int_a^b x\, ds$$
> - Misma curva $y = f(x)$, pero girada alrededor del **eje y**.
> - Aquí el radio es $r(x) = x$ (distancia al eje vertical).

### <span style="color:#7852ee">Superficie con la curva expresada en función de y</span>
> [!example]
> $$S = 2\pi \int_c^d g(y)\, \sqrt{1 + \big[ g'(y) \big]^{2}}\, dy = 2\pi \int_c^d x\, ds$$
> - Curva $x = g(y)$ girada alrededor del **eje y** entre $y = c$ y $y = d$.
> - 📄 Santiago, fórmula (3.9): $S = \displaystyle\int_c^d 2\pi x \sqrt{1 + \left(\frac{dx}{dy}\right)^2}\,dy$

### <span style="color:#ec7500">Forma general de la superficie de revolución</span>
> [!question]
> $$\boxed{\,S = 2\pi \int r\, ds\,} \qquad r = \text{distancia de la curva al eje de rotación}$$
> $$ds = \sqrt{1 + \left(\frac{dy}{dx}\right)^{2}}\,dx \quad \text{ó} \quad ds = \sqrt{1 + \left(\frac{dx}{dy}\right)^{2}}\,dy$$
> - $2\pi r$ = circunferencia del "anillo" generado; $ds$ = grosor del tramo de curva.
> - En una esfera de radio $a$: $S = 4\pi a^2$; en un cilindro de radio $r$ y altura $h$: $S = 2\pi r h$.

### <span style="color:#e93147">Cuidados con la superficie de revolución</span>
> [!danger]
> - **No es** la fórmula de volumen: acá no hay $\pi r^2$, sino $2\pi r$ (circunferencia) por $ds$.
> - El radio $r$ siempre es la **distancia al eje de rotación** (si el eje es $y = k$, entonces $r = |f(x) - k|$).
> - Distinguir bien: **superficie** = área de la "cáscara" exterior; **volumen** = espacio interior.

---

# 🟣 Volumen

### <span style="color:#086ddd">Volumen por el método de los discos</span>
> [!info]
> $$V = \pi \int_a^b \big[ R(x) \big]^{2}\, dx \qquad \text{(eje horizontal, integrar en } x\text{)}$$
> $$V = \pi \int_c^d \big[ R(y) \big]^{2}\, dy \qquad \text{(eje vertical, integrar en } y\text{)}$$
> - Volumen de un disco: $V_{disco} = (\text{área})(\text{anchura}) = \pi R^2 w$.
> - Se usa cuando la región **roza el eje** (no hay hueco): $R$ = altura de la curva hasta el eje.
> - Ejemplo: $y = \sin x$ en $[0, \pi]$ alrededor de $x$: $V = \pi\displaystyle\int_0^\pi \sin^2 x\,dx = \frac{\pi^2}{2}$.

### <span style="color:#00bfbc">Volumen por el método de las arandelas (anillos)</span>
> [!tip]
> $$V = \pi \int_a^b \left( \big[ R(x) \big]^{2} - \big[ r(x) \big]^{2} \right) dx$$
> $$V = \pi \int_c^d \left( \big[ R(y) \big]^{2} - \big[ r(y) \big]^{2} \right) dy$$
> - $R$ = radio **exterior** (curva más alejada del eje), $r$ = radio **interior** (hueco).
> - Volumen de la arandela: $V = \pi(R^2 - r^2)\,w$.
> - Con eje $y = c$: $R(x) = f(x) - c$, $r(x) = g(x) - c$ (Santiago, sección 3.2.1).
> - Ejemplo: entre $y = \sqrt{x}$ y $y = x$ alrededor del eje $x$: $R = \sqrt{x}$, $r = x$ → $V = \pi\displaystyle\int_0^1 (x - x^2)\,dx = \frac{\pi}{6}$.

### <span style="color:#ec7500">Volumen por el método de las capas (cáscaras cilíndricas)</span>
> [!question]
> $$V = 2\pi \int_a^b p(x)\, h(x)\, dx \qquad \text{(eje vertical)}$$
> $$V = 2\pi \int_c^d p(y)\, h(y)\, dy \qquad \text{(eje horizontal)}$$
> - $p$ = **radio** (distancia del rectángulo al eje), $h$ = **altura** del rectángulo, grosor $= dx$ o $dy$.
> - Diferencial: $dV = 2\pi \,(\text{radio})(\text{altura})(\text{grosor}) = 2\pi R \cdot h \cdot w$.
> - El rectángulo representativo es **paralelo** al eje de rotación.
> - Ventaja: se usa cuando **no se puede despejar** $y$ (o $x$) fácilmente, y se evita el hueco/segmentación.

### <span style="color:#7852ee">Volumen de sólidos con secciones transversales conocidas</span>
> [!example]
> $$V = \int_a^b A(x)\, dx \qquad \text{(secciones perpendiculares al eje } x\text{)}$$
> $$V = \int_c^d A(y)\, dy \qquad \text{(secciones perpendiculares al eje } y\text{)}$$
> - $A(x)$ = área de la sección transversal en cada $x$.
> - Casos típicos: cuadrado $A = s^2$, triángulo equilátero $A = \dfrac{\sqrt{3}}{4}s^2$, semicírculo $A = \dfrac{1}{2}\pi r^2$.
> - Ejemplo (Larson): pirámide de base $B$ y altura $h$ → $V = \dfrac{1}{3}hB$.
> - 📄 Santiago, sección 3.2.4: $V = \displaystyle\int_a^b A(x)\,dx$

### <span style="color:#9e9e9e">Cómo elegir el método</span>
> [!cite]
> | Situación | Método | Fórmula |
> |---|---|---|
> | Rectángulo **perpendicular** al eje, sin hueco | **Discos** | $V = \pi\int R^2$ |
> | Rectángulo **perpendicular** al eje, con hueco | **Arandelas** | $V = \pi\int (R^2 - r^2)$ |
> | Rectángulo **paralelo** al eje | **Capas** | $V = 2\pi\int p\,h$ |
> | Sección transversal de área $A(x)$ conocida | **Secciones** | $V = \int A(x)\,dx$ |
> - **1.** Decidir si se integra en $x$ ($dx$, rect. verticales) o en $y$ ($dy$, rect. horizontales) según lo más fácil de despejar.
> - **2.** Trazar el eje: si el lado **mayor** del rectángulo es perpendicular → discos/arandelas; si es **paralelo** → capas.
> - **3.** Escribir radios/altura en la misma variable y poner los límites que recorren toda la región.

### <span style="color:#e93147">Cuidados con los volúmenes</span>
> [!danger]
> - Los radios **siempre** se miden desde el **eje de rotación**: si el eje es $y = k$ o $x = k$, restar esa recta.
> - Si el radio interior **cambia de expresión** en el intervalo → dividir en **dos integrales**.
> - Si despejar $x$ o $y$ es muy difícil, conviene **cambiar de método** (de arandelas a capas o viceversa).

---

# 📐 Datos de apoyo

| Concepto | Fórmula |
|---|---|
| Volumen del disco/cilindro | $V = \pi R^2 w$ |
| Volumen de la arandela | $V = \pi (R^2 - r^2) w$ |
| Volumen de la cáscara cilíndrica | $dV = 2\pi R h w$ |
| Circunferencia generada | $C = 2\pi r$ |
| Distancia entre dos puntos | $d = \sqrt{(\Delta x)^2 + (\Delta y)^2}$ |
| Identidad hiperbólica | $\cosh^2 t = 1 + \sinh^2 t$ |

---

# 🎯 Fórmulas rápidas para exámenes

### <span style="color:#086ddd">Área entre curvas</span>
> [!info]
> 1. **En x (arriba − abajo):** $A = \displaystyle\int_a^b [f(x) - g(x)]\,dx$
> 2. **Con cruces:** $A = \displaystyle\int_a^b |f(x) - g(x)|\,dx$ (partir en cada intersección)
> 3. **En y (derecha − izquierda):** $A = \displaystyle\int_c^d [f(y) - g(y)]\,dy$

### <span style="color:#00bfbc">Longitud de arco</span>
> [!tip]
> 1. **En x:** $s = \displaystyle\int_a^b \sqrt{1 + \left(\frac{dy}{dx}\right)^2}\,dx$
> 2. **En y:** $s = \displaystyle\int_c^d \sqrt{1 + \left(\frac{dx}{dy}\right)^2}\,dy$
> 3. **Paramétrica:** $L = \displaystyle\int_a^b \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2}\,dt$

### <span style="color:#00bfbc">Superficie de revolución</span>
> [!success]
> 1. **Alrededor de x:** $S = 2\pi\displaystyle\int_a^b y\sqrt{1 + \left(\frac{dy}{dx}\right)^2}\,dx$
> 2. **Alrededor de y:** $S = 2\pi\displaystyle\int_a^b x\sqrt{1 + \left(\frac{dy}{dx}\right)^2}\,dx$
> 3. **Forma general:** $S = 2\pi\displaystyle\int r\,ds$

### <span style="color:#7852ee">Volumen</span>
> [!example]
> 1. **Discos:** $V = \pi\displaystyle\int_a^b [R(x)]^2\,dx$
> 2. **Arandelas:** $V = \pi\displaystyle\int_a^b \big([R(x)]^2 - [r(x)]^2\big)\,dx$
> 3. **Capas:** $V = 2\pi\displaystyle\int_a^b p(x)\,h(x)\,dx$
> 4. **Secciones:** $V = \displaystyle\int_a^b A(x)\,dx$
> 5. **Regla:** rect. perpendicular al eje → discos/arandelas · rect. paralelo → capas

---

📄 [[Larson - Calculo de una variable.pdf|Ver Larson - Cap. 7]] · [[Santiago y otros - Cálculo Integral para ingeniería.pdf|Ver Santiago - Unidad 3]]
