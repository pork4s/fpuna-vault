# Fórmulas SP - Cálculo II (C2) · Unidad 2 + Unidad 3 + Unidad 4

> 📖 [[Larson - Calculo de una variable.pdf|Larson - Cálculo de una variable (Cap. 7)]] · [[Santiago y otros - Cálculo Integral para ingeniería.pdf|Santiago - Cálculo Integral para ingeniería (Unidad 3)]] · [[Unidad 3 - Sucesiones y Series.pdf|Sucesiones y Series (Unidad 3)]] · [[Unidad 4 - Funciones de Varias Variables.pdf|Unidad 4 - Funciones de Varias Variables]]

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
> ### [[#🟠 Unidad 3 - Sucesiones y Series]]
> - [[#Sucesión - Definición]]
> - [[#Límite de una sucesión (definición ε–M)]]
> - [[#Teorema 1 - Reducción a límites de funciones]]
> - [[#Propiedades de límites de sucesiones]]
> - [[#Teorema del encaje]]
> - [[#Teorema del valor absoluto]]
> - [[#Sucesión monótona]]
> - [[#Sucesión acotada]]
> - [[#Teorema 5 - Monótona y acotada]]
> - [[#Serie infinita (definición)]]
> - [[#Suma parcial y convergencia de una serie]]
> - [[#Propiedades de las series (linealidad)]]
> - [[#Criterio del término n-ésimo]]
> - [[#Supresión de términos iniciales]]
> - [[#Serie geométrica]]
> - [[#Serie telescópica]]
> - [[#Serie p y serie armónica]]
> - [[#Series alternadas o alternantes]]
> - [[#Criterio de la integral]]
> - [[#Criterio de comparación directa]]
> - [[#Criterio de comparación en el límite]]
> - [[#Criterio de la serie alternada (Leibniz)]]
> - [[#Convergencia absoluta y condicional]]
> - [[#Criterio del cociente (d'Alembert)]]
> - [[#Criterio de la raíz (Cauchy)]]
> - [[#Sumación parcial de Abel]]
> - [[#Criterio de Dirichlet]]
> - [[#Criterio de Abel]]
>
> ### [[#🔷 Unidad 4 - Funciones de Varias Variables]]
> - [[#Función de varias variables - Definición]]
> - [[#Función compuesta]]
> - [[#Gráfica de una función de dos variables]]
> - [[#Dominio de una función de dos variables]]
> - [[#Gráfico del dominio y tipos de dominio]]
> - [[#Curvas de nivel]]
> - [[#Propiedades de las curvas de nivel]]
>
> ### [[#📊 Resumen de criterios de convergencia]]
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

# 🟠 Unidad 3 - Sucesiones y Series

### <span style="color:#086ddd">Sucesión - Definición</span>
> [!info]
> - Una **sucesión** es una función cuyo dominio es el conjunto de enteros positivos $\mathbb{Z}^+$.
> - Se denota $\{a_n\} = a_1, a_2, a_3, a_4, \dots, a_n, \dots$; $a_1$ = primer término, $a_n$ = término $n$-ésimo.
> - La sucesión es **infinita**: cada término tiene un siguiente, por lo tanto **no tiene último término**.
> - Ejemplos: $\left\{\dfrac{1}{2^n}\right\} = \dfrac12, \dfrac14, \dfrac18, \dots$ · $\left\{\dfrac{1}{n!}\right\} = 1, 1, \dfrac16, \dfrac1{24}, \dots$ · $\{n\} = 1, 2, 3, \dots$ · $\left\{\dfrac{1}{3^n}\right\} \to 0$
> - En muchos casos los términos tienden a un valor límite → **sucesión convergente**.

### <span style="color:#00bfbc">Límite de una sucesión (definición ε–M)</span>
> [!tip]
> $$\lim_{n \to \infty} \{a_n\} = L$$
> **si para cada $\varepsilon > 0$ existe $M > 0$ tal que $|a_n - L| < \varepsilon$ siempre que $n > M$.**
> - Si el límite $L$ existe → la sucesión **converge** a $L$.
> - Si el límite no existe → la sucesión **diverge** ($\lim_{n\to\infty} a_n = +\infty$ o $-\infty$).
> - Gráficamente: para $n > M$ todos los términos quedan dentro de la franja entre $y = L + \varepsilon$ y $y = L - \varepsilon$.
> - Ej.: $a_n = \dfrac{1}{n} \Rightarrow \lim_{n\to\infty} \dfrac{1}{n} = 0$ (converge a cero).

### <span style="color:#7852ee">Teorema 1 - Reducción a límites de funciones</span>
> [!example]
> Si $\lim\limits_{x \to \infty} f(x) = L$ y $f(n) = a_n$ para cada entero positivo $n$, entonces:
> $$\lim_{n \to \infty} a_n = L$$
> - Permite calcular el límite de la sucesión usando los límites de funciones ya conocidos (incluida **L'Hôpital**).
> - Ej.: $a_n = \left(1 + \dfrac{1}{n}\right)^n \Rightarrow \lim_{n\to\infty} a_n = \lim_{x\to\infty} \left(1+\dfrac1x\right)^x = e$ (número de Euler).
> - ⚠️ El recíproco del teorema **no** es cierto.

### <span style="color:#ec7500">Propiedades de límites de sucesiones</span>
> [!question]
> Sean $\lim\limits_{n \to \infty} a_n = L_1$ y $\lim\limits_{n \to \infty} b_n = L_2$:
> $$\lim_{n \to \infty} \left(a_n \mp b_n\right) = L_1 \mp L_2$$
> $$\lim_{n \to \infty} \left(c \cdot a_n\right) = c \cdot L_1 \qquad (c \text{ cualquier número real})$$
> $$\lim_{n \to \infty} \left(a_n \cdot b_n\right) = L_1 \cdot L_2$$
> $$\lim_{n \to \infty} \frac{a_n}{b_n} = \frac{L_1}{L_2} \qquad (b_n \neq 0 \ y \ L_2 \neq 0)$$

### <span style="color:#9e9e9e">Teorema del encaje</span>
> [!cite]
> Si $\lim\limits_{n \to \infty} a_n = L = \lim\limits_{n \to \infty} b_n$ y existe un entero $N$ tal que $a_n \leq c_n \leq b_n$ para todo $n > N$, entonces:
> $$\lim_{n \to \infty} c_n = L$$
> - Se usa cuando $c_n$ es difícil de acotar directamente: se la "encaja" entre dos sucesiones que tienden al mismo límite.
> - Ej.: $-\dfrac{1}{2^n} \le (-1)^n \dfrac{1}{n!} \le \dfrac{1}{2^n}$ con ambas tendiendo a $0$ ⇒ $\lim (-1)^n \dfrac{1}{n!} = 0$.

### <span style="color:#9e9e9e">Teorema del valor absoluto</span>
> [!cite]
> $$\lim_{n \to \infty} |a_n| = 0 \quad \Longrightarrow \quad \lim_{n \to \infty} a_n = 0$$
> - Si el valor absoluto tiende a cero, la sucesión también converge a cero.
> - Ej.: $a_n = (-1)^n \dfrac{2n-1}{n!}$ → $|a_n| = \dfrac{2n-1}{n!} \to 0$ (crece más rápido $n!$) ⇒ $a_n \to 0$.

### <span style="color:#e93147">Sucesión monótona</span>
> [!danger]
> $\{a_n\}$ es **monótona** si para todos sus términos se verifica:
> $$a_1 \leq a_2 \leq a_3 \leq \dots \leq a_n \leq \dots \qquad \text{ó} \qquad a_1 \geq a_2 \geq a_3 \geq \dots \geq a_n \geq \dots$$
> - Es decir, si sus términos son **no decrecientes** o **no crecientes**.
> - Verificación práctica: comparar $a_n$ con $a_{n+1}$.
> - Ej.: $\dfrac{n}{n+1} \le \dfrac{n+1}{n+2} \iff n(n+2) \le (n+1)^2 \iff n^2 + 2n \le n^2 + 2n + 1 \iff 0 \le 1$ ✓ ⇒ monótona.
> - ⚠️ $\{a_n\} = \left\{2 + (-1)^n\right\} = 1, 3, 1, 3, \dots$ alterna → **no** es monótona.

### <span style="color:#e93147">Sucesión acotada</span>
> [!danger]
> $\{a_n\}$ es **acotada** si lo está superior o inferiormente:
> - **Acotada superiormente:** existe un número real $M$ tal que $a_n \leq M$ para todo $n$ ($M$ = **cota superior**).
> - **Acotada inferiormente:** existe un número real $N$ tal que $N \leq a_n$ para todo $n$ ($N$ = **cota inferior**).

### <span style="color:#086ddd">Teorema 5 - Monótona y acotada</span>
> [!info]
> $$\text{monótona} + \text{acotada} \;\Longrightarrow\; \text{converge}$$
> - Si una sucesión $\{a_n\}$ es monótona **y** acotada, entonces converge.
> - Ej.: $\left\{\dfrac{1}{2^n}\right\}$ es monótona decreciente y acotada entre $0$ y $\dfrac12$ ⇒ converge.
> - ⚠️ Estar acotada **no alcanza**: $\{(-1)^n\} = -1, 1, -1, \dots$ está acotada pero no es monótona y diverge.

### <span style="color:#00bfbc">Serie infinita (definición)</span>
> [!tip]
> $$\sum_{n=1}^{\infty} a_n = a_1 + a_2 + a_3 + \dots + a_n + \dots$$
> - A partir de una sucesión infinita $\{a_n\}$, la **serie** es la suma de todos sus términos ($a_n$ = término de la serie).
> - A veces el índice inicia en $n = 0$ (u otro entero); si se escribe solo $\sum a_n$, el índice se deduce del contexto.

### <span style="color:#7852ee">Suma parcial y convergencia de una serie</span>
> [!example]
> $$S_n = a_1 + a_2 + a_3 + \dots + a_n$$
> - Si la sucesión de sumas parciales $\{S_n\}$ converge a $S$, la serie **converge** y $S$ es su **suma**: $S = \displaystyle\sum_{n=1}^{\infty} a_n$.
> - Si $\{S_n\}$ diverge, la serie **diverge**.
> - Ej.: $\displaystyle\sum_{n=1}^{\infty} n = 1+2+3+\dots$ → $S_n = \dfrac{n(n+1)}{2} \to \infty$ ⇒ **diverge**.
> - Ej.: $\displaystyle\sum_{n=1}^{\infty} \frac{1}{2^n} \to S_n = \dfrac{2^n - 1}{2^n} \to 1$ ⇒ converge.

### <span style="color:#ec7500">Propiedades de las series (linealidad)</span>
> [!question]
> Sean $\displaystyle\sum_{n=1}^{\infty} a_n = A$ y $\displaystyle\sum_{n=1}^{\infty} b_n = B$ convergentes y $c \in \mathbb{R}$:
> $$\sum_{n=1}^{\infty} c\,a_n = cA \qquad \sum_{n=1}^{\infty} (a_n + b_n) = A + B \qquad \sum_{n=1}^{\infty} (a_n - b_n) = A - B$$

### <span style="color:#e93147">Criterio del término n-ésimo</span>
> [!danger]
> **Teorema 9:** si $\displaystyle\sum_{n=1}^{\infty} a_n$ converge, entonces $\lim\limits_{n \to \infty} a_n = 0$.
> **Teorema 10 (divergencia):** si $\lim\limits_{n \to \infty} a_n \neq 0$ (o no existe), entonces $\displaystyle\sum_{n=1}^{\infty} a_n$ **diverge**.
> - ⚠️ Que $\lim a_n = 0$ **no** garantiza convergencia (ej.: la serie armónica diverge aunque $a_n \to 0$).
> - ⚠️ Este criterio **solo sirve para demostrar divergencia**, nunca convergencia.
> - Ej.: $\lim_{n\to\infty} 3^n = \infty \neq 0$ ⇒ $\sum 3^n$ diverge.

### <span style="color:#9e9e9e">Supresión de términos iniciales</span>
> [!cite]
> **Teorema 7:** si una serie converge, también converge la serie obtenida al eliminar un número **finito** de términos iniciales (y viceversa).
> - Los primeros términos **no** afectan la convergencia/divergencia, solo cambian la suma.

### <span style="color:#086ddd">Serie geométrica</span>
> [!info]
> $$\sum_{n=0}^{\infty} a r^n = ar + ar^2 + ar^3 + \dots + ar^n + \dots \qquad (a \neq 0)$$
> **Teorema 6:**
> $$|r| < 1 \;\Rightarrow\; \text{converge} \qquad S = \frac{a}{1 - r}$$
> $$|r| \geq 1 \;\Rightarrow\; \text{diverge}$$
> - $a$ = primer término, $r$ = **razón** de la serie geométrica.
> - Ej.: $\displaystyle\sum_{n=0}^{\infty} \frac{2}{2^n} = \sum 2\left(\frac12\right)^n$ → $a = 2$, $r = \dfrac12$ ⇒ $S = \dfrac{2}{1 - \frac12} = 4$.
> - Ej.: $\displaystyle\sum_{n=0}^{\infty} \left(\frac{5}{4}\right)^n$ → $r = \dfrac54 \ge 1$ ⇒ diverge.

### <span style="color:#00bfbc">Serie telescópica</span>
> [!tip]
> $$\sum_{n=1}^{\infty} \left(a_n - a_{n+1}\right) \qquad S_n = a_1 - a_{n+1}$$
> $$\text{Converge} \iff \lim_{n \to \infty} a_n \text{ es un número finito} \qquad S = a_1 - \lim_{n \to \infty} a_{n+1}$$
> - La suma parcial $n$-ésima **siempre** es $S_n = a_1 - a_{n+1}$ (se cancelan todos los términos intermedios).
> - A veces conviene usar **fracciones parciales** para llevar una serie a forma telescópica:
> $$\frac{2}{4n^2 - 1} = \frac{1}{2n-1} - \frac{1}{2n+1} \;\Rightarrow\; S_n = 1 - \frac{1}{2n+1} \to 1$$

### <span style="color:#7852ee">Serie p y serie armónica</span>
> [!example]
> $$\sum_{n=1}^{\infty} \frac{1}{n^p} = \frac{1}{1^p} + \frac{1}{2^p} + \frac{1}{3^p} + \dots + \frac{1}{n^p} + \dots$$
> **Teorema 12:**
> - **Converge si $p > 1$**
> - **Diverge si $0 < p \leq 1$**
> - Caso especial $p = 1$: **serie armónica** $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n} = 1 + \frac12 + \frac13 + \dots$ ⇒ **diverge**.
> - Armónica general: $\displaystyle\sum_{n=1}^{\infty} \frac{1}{an + b}$.
> - Ej.: $\sum \dfrac{1}{n^2}$ → $p = 2 > 1$ ⇒ converge · $\sum \dfrac{1}{\sqrt{n}}$ → $p = \dfrac12$ ⇒ diverge.

### <span style="color:#ec7500">Series alternadas o alternantes</span>
> [!question]
> - Son series cuyos términos **alternan de signo** (Definición 7): $\displaystyle\sum (-1)^{n+1} a_n$ con $a_n > 0$.
> - Dos tipos: los términos **impares** negativos, o los términos **pares** negativos.
> - Ej.: $\displaystyle\sum_{n=0}^{\infty} \left(-\frac{1}{3}\right)^n = \sum (-1)^n \frac{1}{3^n} = 1 - \frac13 + \frac19 - \frac{1}{27} + \dots$ (geométrica alternada, $r = -\dfrac13$).

### <span style="color:#086ddd">Criterio de la integral</span>
> [!info]
> **Teorema 11:** si $f$ es **positiva, continua y decreciente** para $x \geq 1$ y $a_n = f(n)$, entonces:
> $$\sum_{n=1}^{\infty} a_n \quad \text{y} \quad \int_1^{\infty} f(x)\,dx \quad \text{ambas convergen o ambas divergen}$$
> **Residuo:** $$0 < R_N < \int_N^{\infty} f(x)\,dx$$
> - Verificar las condiciones: $f(x) \geq 0$, continua y $f'(x) < 0$ para $x \geq 1$.
> - ⚠️ **No** afirma que la suma de la serie sea igual a la integral: solo decide convergencia o divergencia.
> - Ej.: $\int_1^\infty \dfrac{dx}{x^2+1} = \lim_{n\to\infty}[\arctan x]_1^n = \dfrac{\pi}{2} - \dfrac{\pi}{4} = \dfrac{\pi}{4}$ ⇒ $\displaystyle\sum \dfrac{1}{n^2+1}$ converge.

### <span style="color:#00bfbc">Criterio de comparación directa</span>
> [!tip]
> **Teorema 13:** sean $0 < a_n \leq b_n$ para todo $n$. Entonces:
> - Si $\displaystyle\sum_{n=1}^{\infty} b_n$ **converge** → $\displaystyle\sum_{n=1}^{\infty} a_n$ **converge**.
> - Si $\displaystyle\sum_{n=1}^{\infty} a_n$ **diverge** → $\displaystyle\sum_{n=1}^{\infty} b_n$ **diverge**.
> - Basta que se cumpla para todo $n$ mayor que algún entero $N$ (los primeros términos no cambian el resultado).
> - Se compara con una serie **conocida** (geométrica, armónica, serie $p$).

### <span style="color:#7852ee">Criterio de comparación en el límite</span>
> [!example]
> **Teorema 14:** suponga $a_n > 0$, $b_n > 0$ y
> $$\lim_{n \to \infty} \frac{a_n}{b_n} = L, \qquad 0 < L < \infty$$
> Entonces $\displaystyle\sum a_n$ y $\displaystyle\sum b_n$ **convergen o divergen juntas**.
> - Se usa cuando la comparación término a término (directa) no es posible.
> - Ej.: $\lim \dfrac{1/(3n+1)}{1/n} = \lim \dfrac{n}{3n+1} = \dfrac13 > 0$ ⇒ igual comportamiento que $\sum \dfrac1n$ (diverge).

### <span style="color:#ec7500">Criterio de la serie alternada (Leibniz)</span>
> [!question]
> **Teorema 15:** sea $a_n > 0$. Las series alternadas $\displaystyle\sum (-1)^n a_n$ y $\displaystyle\sum (-1)^{n+1} a_n$ **convergen** si se cumplen:
> $$\text{a)}\ \lim_{n \to \infty} a_n = 0 \qquad \qquad \text{b)}\ a_{n+1} \leq a_n \ \text{ para todo } n$$
> **Resto (Teorema 16):** si se aproxima $S \approx S_N$:
> $$|S - S_N| = |R_N| \leq a_{N+1}$$
> - El error de la aproximación es **como máximo** el primer término desechado.
> - La condición b) solo se requiere para $n$ mayor que algún entero $N$.

### <span style="color:#9e9e9e">Convergencia absoluta y condicional</span>
> [!cite]
> **Definición 8:**
> - **Absolutamente convergente:** converge $\displaystyle\sum |a_n|$ (entonces converge también $\displaystyle\sum a_n$, Teorema 17).
> - **Condicionalmente convergente:** converge $\displaystyle\sum a_n$ pero **diverge** $\displaystyle\sum |a_n|$.
> - Ej.: $\sum (-1)^{n+1}\dfrac1n$ converge (Leibniz) pero $\sum \dfrac1n$ diverge ⇒ **condicionalmente convergente**.
> - ⚠️ Si la serie es **absolutamente convergente**, cualquier **reordenación** de sus términos da la misma suma.

### <span style="color:#e93147">Criterio del cociente (d'Alembert)</span>
> [!danger]
> **Teorema 18:** sea $\displaystyle\sum a_n$ una serie con términos distintos de cero y
> $$L = \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right|$$
> - $L < 1$ → $\sum a_n$ es **absolutamente convergente**
> - $L > 1$ o $L = \infty$ → $\sum a_n$ **diverge**
> - $L = 1$ → el criterio **no es concluyente** (usar otro criterio)
> - Ej.: $\displaystyle\sum \frac{3^n}{n!}$ → $\lim \left|\dfrac{3^{n+1}/(n+1)!}{3^n/n!}\right| = \lim \dfrac{3}{n+1} = 0 < 1$ ⇒ converge.

### <span style="color:#e93147">Criterio de la raíz (Cauchy)</span>
> [!danger]
> **Teorema 19:** sea $\displaystyle\sum a_n$ una serie y
> $$L = \lim_{n \to \infty} \sqrt[n]{|a_n|}$$
> - $L < 1$ → $\sum a_n$ **converge absolutamente**
> - $L > 1$ o $L = \infty$ → $\sum a_n$ **diverge**
> - $L = 1$ → **no concluyente**
> - Muy útil para series con **n-ésimas potencias**, de la forma $(\dots)^n$.

### <span style="color:#086ddd">Sumación parcial de Abel</span>
> [!info]
> **Teorema 20:** sean $\{a_n\}$ y $\{b_n\}$ sucesiones y $A_n = \displaystyle\sum_{k=1}^{n} a_k$. Entonces:
> $$\sum_{k=1}^{n} a_k b_k = A_n b_{n+1} + \sum_{k=1}^{n} A_k \left(b_k - b_{k+1}\right)$$
> - De aquí se sigue que $\sum a_k b_k$ converge si convergen **simultáneamente** $\sum A_k(b_k - b_{k+1})$ y la sucesión $A_n b_{n+1}$.
> - Es la identidad algebraica en la que se basan los criterios de Dirichlet y Abel.

### <span style="color:#00bfbc">Criterio de Dirichlet</span>
> [!tip]
> **Teorema 21:** sea $\sum a_n$ una serie cuyas **sumas parciales forman una sucesión acotada** y $\{b_n\}$ una **sucesión real decreciente que converge a cero**. Entonces:
> $$\sum a_n b_n \ \text{converge}$$
> - Ej.: $\displaystyle\sum \frac{z^n}{3^n}$ con $|z| = 1$, $z \neq 1$: $b_n = \dfrac{1}{3^n}$ es decreciente a $0$ y las sumas parciales de $z^n$ son acotadas ⇒ converge.

### <span style="color:#7852ee">Criterio de Abel</span>
> [!example]
> **Teorema 22:** sea $\sum a_n$ una serie **convergente** y $\{b_n\}$ una **sucesión monótona convergente** de términos reales. Entonces:
> $$\sum a_n b_n \ \text{converge}$$
> - Ej.: $\displaystyle\sum \frac{z^n}{3^n} \cdot \frac{1}{n}$ con $|z| = 1$, $z \neq 1$: $\sum \dfrac{z^n}{3^n}$ converge y $b_n = \dfrac1n$ es monótona convergente ⇒ converge.

---

# 🔷 Unidad 4 - Funciones de Varias Variables

### <span style="color:#086ddd">Función de varias variables - Definición</span>
> [!info]
> Una **función de $n$ variables** es una regla $f$ que asocia a cada punto $(x_1, x_2, \dots, x_n)$ de un conjunto $D$ un único número real:
> $$f: D \subseteq \mathbb{R}^n \longrightarrow \mathbb{R} \qquad (x_1, x_2, \dots, x_n) \longmapsto y = f(x_1, x_2, \dots, x_n)$$
> - A las funciones de varias variables también se las llama **campos escalares**: asignan un **número real** (escalar), no un vector.
> - Caso $n = 2$: $z = f(x, y)$, donde $x$ e $y$ son **variables independientes** y $z$ es la **variable dependiente**.
> - Igual que con una variable, se representan **numéricamente** (tabla de valores), **algebraicamente** (fórmula) y **gráficamente** (superficie).
> - Se combinan igual que las de una variable:
> $$(f \pm g)(x,y) = f(x,y) \pm g(x,y) \quad (fg)(x,y) = f(x,y)\,g(x,y) \quad \left(\frac{f}{g}\right)(x,y) = \frac{f(x,y)}{g(x,y)},\ g(x,y) \neq 0$$
> - Casos especiales: $f(x) = ax + b$ → recta · $f(x,y) = ax + by + c$ → plano · $f(x_1,\dots,x_n) = a_1x_1 + \dots + a_nx_n + b$ → **hiperplano** en $\mathbb{R}^{n+1}$.
> - 📄 Unidad 4, sección 1.

### <span style="color:#00bfbc">Función compuesta</span>
> [!tip]
> Si $f$ es una función de **una** variable y $g$ una de **dos**, la compuesta $f \circ g$ es la función de dos variables:
> $$(f \circ g)(x, y) = f\big(g(x, y)\big)$$
> - Su **dominio**: todos los $(x, y)$ del dominio de $g$ tales que $g(x, y)$ pertenece al dominio de $f$.
> - Ej.: $f(t) = \ln t$ y $g(x,y) = x^2 + y$ → $h(x,y) = (f\circ g)(x,y) = \ln(x^2 + y)$ (dominio: $x^2 + y > 0$).
> - 📄 Unidad 4, sección 1.2.

### <span style="color:#7852ee">Gráfica de una función de dos variables</span>
> [!example]
> $$\text{gráfica}_f = \{(x, y, z) \in \mathbb{R}^3 : (x, y) \in D(f) \text{ y } z = f(x, y)\} = \{(x, y, f(x,y)) : (x,y) \in D(f)\}$$
> - La gráfica de $z = f(x, y)$ es una **superficie** en el espacio; cada punto de ella se escribe $(x, y, f(x,y))$.
> - La **proyección** de la gráfica sobre el plano $xy$ coincide con el **dominio** de la función.
> - Correspondencia 1-1: a cada $(x,y)$ del dominio le corresponde un único punto $(x,y,z)$ sobre la superficie, y viceversa.
> - ⚠️ Como no toda curva del plano es gráfica de $y = f(x)$, no toda superficie es gráfica de $z = f(x,y)$: debe pasar el **test de la vertical** (la vertical a cada punto del dominio corta la gráfica en **un solo punto**). Ej.: una **esfera** no es gráfica de una función $z = f(x,y)$.
> - Ej.: $f(x,y) = 2x + y - 4$ → $z = 2x + y - 4$ → $2x + y - z = 4$ = ecuación de un **plano**; se traza con los tres puntos donde corta los ejes: $(2,0,0)$, $(0,4,0)$, $(0,0,-4)$.
> - 📄 Unidad 4, sección 1.3.

### <span style="color:#ec7500">Dominio de una función de dos variables</span>
> [!question]
> El **dominio de definición** es el conjunto de todos los pares $(x, y)$ donde la función está definida. Se halla igual que en una variable, chequeando cada operación restringida y **uniendo (intersectando)** todas las condiciones:
> | Restricción | Condición que se impone |
> |---|---|
> | Denominador | $g(x, y) \neq 0$ |
> | Raíz de índice par | $f(x, y) \geq 0$ |
> | Logaritmo (ln, log) | $f(x, y) > 0$ |
> | Arcoseno / arcocoseno | $-1 \leq f(x, y) \leq 1$ |
> - Ej.: $f(x,y) = \sqrt{x + y}$ → $x + y \geq 0$ → todo punto por encima (o sobre) la recta $y = -x$.
> - Ej.: $f(x,y) = \dfrac{1}{\sqrt{1 - x^2 - y^2}}$ → raíz $> 0$ en el denominador → $1 - x^2 - y^2 > 0$ → $x^2 + y^2 < 1$ (**disco abierto** de radio 1).
> - Ej.: $f(x,y) = \ln(16 - x^2 - y^2) + \sqrt{y - x}$ → $16 - x^2 - y^2 > 0$ **y** $y - x \geq 0$ → intersección de disco abierto de radio 4 con la región $y \geq x$.
> - 📄 Unidad 4, sección 1 (dominio, frontera, interior).

### <span style="color:#e93147">Gráfico del dominio y tipos de dominio</span>
> [!danger]
> El dominio se dibuja como una **región sombreada en el plano $xy$** (¡no en el espacio!). Para graficarlo:
> **1.** Igualar las restricciones con $=$ para hallar la **frontera** (curva o recta que limita el dominio).
> **2.** Dibujar la frontera: **línea continua** si los puntos de la frontera **pertenecen** al dominio ($\geq$ o $\leq$); **línea discontinua (punteada)** si **no** pertenecen ($>$ o $<$).
> **3.** Elegir qué lado sombrear con el **truco del punto de prueba**: reemplazar un punto (ej. el origen $(0,0)$, o cualquier otro si el origen cae en la frontera) en la desigualdad; si se cumple, ese lado es el dominio.
> Conceptos (Unidad 4, sección 1):
> - **Frontera:** la curva/recta que limita al dominio.
> - **Puntos interiores:** puntos del dominio que no están en la frontera.
> - **Dominio abierto:** formado solo por puntos interiores (no incluye su frontera). Ej.: $x^2 + y^2 < 1$.
> - **Dominio cerrado:** incluye también su frontera. Ej.: $x^2 + y^2 \leq 1$.
> - **Dominio acotado:** existe una constante $C > 0$ tal que la distancia de todo punto $M$ del dominio al origen es menor que $C$: $|OM| < C$. Ej.: el disco $x^2 + y^2 \leq 1$ es acotado; todo $\mathbb{R}^2$ **no** lo es.
> - 📄 Unidad 4, sección 1 (A–F).

### <span style="color:#086ddd">Curvas de nivel</span>
> [!info]
> Sean $z = f(x, y)$ y $k$ una constante:
> - **Curva de contorno** de altura $k$: la intersección del plano horizontal $z = k$ con la superficie $z = f(x,y)$ (sección horizontal de la montaña).
> - **Curva de nivel** de altura $k$: la **proyección** de esa curva de contorno sobre el plano $xy$. Se obtiene simplemente igualando:
> $$\boxed{\,f(x, y) = k\,}$$
> - Son el conjunto de puntos del dominio donde la función toma el **mismo valor** $k$ (altura constante sobre la gráfica).
> - Permiten representar una **superficie tridimensional con un mapa plano** (como las curvas de nivel de un mapa topográfico). Conviene elegir bien los valores de $k$ para que el mapa dé una visualización clara.
> - Ej.: $f(x,y) = x^2 + y^2$ (dominio $= \mathbb{R}^2$): cortes con $x = 0$ → $z = y^2$ (parábola) y con $y = 0$ → $z = x^2$ (parábola); niveles $x^2 + y^2 = k$ → circunferencias de radio $\sqrt{k}$: $k = 0$ → el punto $(0,0)$; $k = 1$ → radio $1$; $k = 4$ → radio $2$; $k = 9$ → radio $3$.
> - 📄 Unidad 4, sección 1.5.

### <span style="color:#00bfbc">Propiedades de las curvas de nivel</span>
> [!tip]
> - **Nunca se cortan:** dos curvas de nivel distintas del mismo campo escalar no pueden cruzarse, porque la función $f$ asocia un **único** valor $z = f(x,y)$ a cada punto $(x,y)$.
> - **El espaciado revela la pendiente:**
>   - Mucha distancia entre dos curvas de nivel → la superficie **crece lentamente** (ladera suave).
>   - Curvas muy próximas entre sí → la superficie **crece rápidamente** (ladera empinada).
> - Curvas de nivel de funciones típicas:
>   - $f(x,y) = x^2 + y^2$ → **circunferencias** concéntricas (paraboloide elíptico).
>   - $f(x,y) = xy = k$ → **hipérbolas** $y = k/x$.
>   - $f(x,y) = ax + by + c$ → **rectas paralelas** $ax + by = k$ (plano).
> - **Superficies de nivel** (sección 1.6): para $f(x,y,z)$ con $k$ constante, la gráfica de $f(x,y,z) = k$ es una superficie de nivel; ej.: $f(x,y,z) = x^2 + y^2 + z^2$ → esferas concéntricas de radio $\sqrt{k}$.
> - 📄 Unidad 4, secciones 1.5 y 1.6.

---

# 📊 Resumen de criterios de convergencia

| Criterio | Serie | Converge si | Diverge si | Comentario |
|---|---|---|---|---|
| **Término n-ésimo** | $\sum a_n$ | — | $\lim\limits_{n\to\infty} a_n \neq 0$ | No sirve para demostrar convergencia |
| **Geométrica** | $\sum ar^n$ | $\|r\| < 1$ | $\|r\| \geq 1$ | Suma: $S = \dfrac{a}{1-r}$ |
| **Telescópica** | $\sum (b_n - b_{n+1})$ | $\lim\limits_{n\to\infty} b_n = L$ | — | Suma: $S = b_1 - L$ |
| **Serie p** | $\sum \dfrac{1}{n^p}$ | $p > 1$ | $0 < p \leq 1$ | — |
| **Alternada (Leibniz)** | $\sum (-1)^{n+1} a_n$ | $0 < a_{n+1} \leq a_n$ y $\lim a_n = 0$ | — | Residuo: $\|R_N\| \leq a_{N+1}$ |
| **Integral** ($f$ continua, positiva y decreciente) | $\sum a_n$, $a_n = f(n)$ | $\displaystyle\int_1^{\infty} f(x)\,dx$ converge | $\displaystyle\int_1^{\infty} f(x)\,dx$ diverge | Residuo: $0 < R_N < \displaystyle\int_N^{\infty} f(x)\,dx$ |
| **Raíz (Cauchy)** | $\sum a_n$ | $\lim\limits_{n\to\infty} \sqrt[n]{\|a_n\|} < 1$ | $> 1$ o $= \infty$ | No concluyente si $= 1$ |
| **Cociente (d'Alembert)** | $\sum a_n$ | $\lim\limits_{n\to\infty} \left\|\dfrac{a_{n+1}}{a_n}\right\| < 1$ | $> 1$ o $= \infty$ | No concluyente si $= 1$ |
| **Comparación directa** ($a_n, b_n > 0$) | $0 < a_n \leq b_n$ | $\sum b_n$ converge | $\sum a_n$ diverge | — |
| **Comparación en el límite** ($a_n, b_n > 0$) | $\sum a_n$, $\sum b_n$ | $\lim \dfrac{a_n}{b_n} = L > 0$ y $\sum b_n$ converge | $\lim \dfrac{a_n}{b_n} = L > 0$ y $\sum b_n$ diverge | — |

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

### <span style="color:#ec7500">Unidad 3 - Sucesiones</span>
> [!question]
> 1. **Límite:** $\lim_{n\to\infty} a_n = L$ si $\forall \varepsilon > 0\ \exists M > 0: |a_n - L| < \varepsilon$ para $n > M$
> 2. **Propiedades:** $\lim(a_n \mp b_n) = L_1 \mp L_2$ · $\lim(c\,a_n) = cL_1$ · $\lim(a_n b_n) = L_1L_2$ · $\lim\dfrac{a_n}{b_n} = \dfrac{L_1}{L_2}$
> 3. **Encaje:** $a_n \le c_n \le b_n$ y $\lim a_n = \lim b_n = L$ ⇒ $\lim c_n = L$
> 4. **Valor absoluto:** $\lim |a_n| = 0$ ⇒ $\lim a_n = 0$
> 5. **Monótona:** $a_1 \le a_2 \le \dots$ ó $a_1 \ge a_2 \ge \dots$
> 6. **Acotada:** $a_n \le M$ (sup.) ó $N \le a_n$ (inf.)
> 7. **Teorema 5:** monótona + acotada ⇒ **converge**

### <span style="color:#00bfbc">Unidad 3 - Series</span>
> [!tip]
> 1. **Suma parcial:** $S_n = a_1 + a_2 + \dots + a_n$ · $\lim S_n = S$ ⇒ la serie converge a $S$
> 2. **Linealidad:** $\sum c a_n = cA$ · $\sum(a_n \pm b_n) = A \pm B$
> 3. **Término n-ésimo:** si $\lim a_n \neq 0$ ⇒ **diverge** (sirve solo para divergir)
> 4. **Geométrica:** converge si $|r| < 1$ ⇒ $S = \dfrac{a}{1-r}$
> 5. **Telescópica:** $S_n = a_1 - a_{n+1}$ ⇒ $S = a_1 - \lim a_{n+1}$
> 6. **Serie p:** converge si $p > 1$ · diverge si $0 < p \le 1$ (armónica: $p = 1$)
> 7. **Suprimir términos finitos** no cambia la convergencia

### <span style="color:#7852ee">Unidad 3 - Criterios de convergencia</span>
> [!example]
> 1. **Integral:** $f > 0$, continua, decreciente ⇒ $\sum a_n$ y $\int_1^\infty f(x)dx$ juntas · $0 < R_N < \int_N^\infty f(x)dx$
> 2. **Comparación directa:** $0 < a_n \le b_n$ · $\sum b_n$ conv. ⇒ $\sum a_n$ conv. · $\sum a_n$ div. ⇒ $\sum b_n$ div.
> 3. **Comparación en el límite:** $\lim \dfrac{a_n}{b_n} = L$, $0 < L < \infty$ ⇒ mismas conductas
> 4. **Alternada (Leibniz):** $\lim a_n = 0$ y $a_{n+1} \le a_n$ ⇒ converge · $|R_N| \le a_{N+1}$
> 5. **Absoluta:** converge $\sum |a_n|$ ⇒ converge $\sum a_n$ · **condicional:** $\sum a_n$ conv. y $\sum|a_n|$ div.
> 6. **Cociente (d'Alembert):** $L = \lim\left|\dfrac{a_{n+1}}{a_n}\right|$ → $L<1$ conv. · $L>1$ div. · $L=1$ no concluye
> 7. **Raíz (Cauchy):** $L = \lim \sqrt[n]{|a_n|}$ → $L<1$ conv. · $L>1$ div. · $L=1$ no concluye
> 8. **Dirichlet:** sumas parciales acotadas + $b_n \downarrow 0$ ⇒ $\sum a_n b_n$ converge
> 9. **Abel:** $\sum a_n$ converge + $b_n$ monótona convergente ⇒ $\sum a_n b_n$ converge

### <span style="color:#086ddd">Unidad 4 - Funciones de varias variables</span>
> [!info]
> 1. **Definición:** $f: D \subseteq \mathbb{R}^n \to \mathbb{R}$, $(x_1,\dots,x_n) \mapsto f(x_1,\dots,x_n)$ · caso 2 vars.: $z = f(x,y)$ · también llamadas **campos escalares**
> 2. **Compuesta:** $(f\circ g)(x,y) = f(g(x,y))$ · dominio = $(x,y) \in D_g$ con $g(x,y) \in D_f$
> 3. **Gráfica:** $\{(x,y,f(x,y)) : (x,y) \in D(f)\}$ = **superficie** en $\mathbb{R}^3$ · su proyección sobre $xy$ = dominio · debe pasar el **test de la vertical**
> 4. **Dominio:** denominador $\neq 0$ · raíz par $\geq 0$ · logaritmo $> 0$ · $\arccos/\arcsin \in [-1,1]$ · intersectar todas las condiciones
> 5. **Gráfico del dominio:** frontera con $=$ → línea **continua** si pertenece al dominio, **punteada** si no · sombrear con **punto de prueba**
> 6. **Tipos:** abierto (sin frontera) · cerrado (con frontera) · acotado ($|OM| < C$)
> 7. **Curvas de nivel:** $f(x,y) = k$ (constante) = proyección del corte $z = k$ sobre el plano $xy$ · **no se cortan** entre sí · espaciado grande = crece lento, espaciado chico = crece rápido

---

📄 [[Larson - Calculo de una variable.pdf|Ver Larson - Cap. 7]] · [[Santiago y otros - Cálculo Integral para ingeniería.pdf|Ver Santiago - Unidad 3]] · [[Unidad 3 - Sucesiones y Series.pdf|Ver PDF Sucesiones y Series]] · [[Unidad 4 - Funciones de Varias Variables.pdf|Ver PDF Funciones de Varias Variables]]
