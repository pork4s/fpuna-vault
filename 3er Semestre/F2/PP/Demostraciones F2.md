# Demostraciones Paso a Paso - Fórmulas de Campo Eléctrico y Ley de Gauss

> 📖 [[Fórmulas F2]] · 📖 [[Sears Zemansky Vol. 2.pdf|Sears Zemansky Vol. 2]] · 📖 [[Serway Vol. 2.pdf|Serway Vol. 2]]

---

> [!note]- 📑 Índice
> **Campo eléctrico por integración (superposición)**
> - [[#1. Línea recta infinita cargada]]
> - [[#2. Anillo uniforme de carga (en su eje)]]
> - [[#3. Disco cargado uniformemente (en su eje)]]
> - [[#4. Semicircunferencia cargada (en su centro de curvatura)]]
>
> **Ley de Gauss**
> - [[#5. Simetría esférica (esfera cargada)]]
> - [[#6. Simetría cilíndrica (cilindro o línea infinita)]]
> - [[#7. Plano de carga infinito]]
> - [[#8. Dos placas con la MISMA carga (mismo signo)]]
> - [[#9. Placas paralelas con carga opuesta (capacitor)]]

---

> [!info] Notación y constantes
> - $k = \dfrac{1}{4\pi\epsilon_0} = 9 \times 10^9 \, N \cdot m^2/C^2$
> - $\epsilon_0 = 8,85 \times 10^{-12} \, C^2/N \cdot m^2$
> - $dE = \dfrac{k\,dq}{s^2}$ → campo eléctrico de un elemento de carga puntual $dq$ a distancia $s$
> - $\lambda = \dfrac{Q}{L}$ (densidad lineal), $\sigma = \dfrac{Q}{A}$ (densidad superficial), $\rho = \dfrac{Q}{V}$ (densidad volumétrica)
> - **Método general:** elegir $dq$ → escribir $dE$ → descomponer en componentes → aplicar simetría → integrar.

---
---

# ⚡ PARTE A — Campo eléctrico por integración

---

## 1. Línea recta finita cargada (segmento de longitud L)

> [!example] Resultado
> $$E = \frac{k\lambda L}{x\sqrt{x^2 + \dfrac{L^2}{4}}} = \frac{2k\lambda}{x}\,\text{sen}\,\theta \quad \text{(N/C o V/m)}$$
> con $\theta = \arctan\dfrac{L}{2x}$ (ángulo que subtiende la mitad de la línea en $P$)

**Geometría:** segmento recto de longitud $L$ con densidad lineal constante $\lambda$, sobre el eje $y$ centrado en el origen (va de $y = -L/2$ a $y = +L/2$). Punto $P$ a una **distancia perpendicular $x$** de la línea, sobre la perpendicular que pasa por su punto medio.

**Paso 1 — Elemento de carga:**
Tomo un segmento $dy$ en la posición $y$:
$$dq = \lambda\, dy$$

**Paso 2 — Distancia y campo del elemento:**
La distancia desde $dy$ hasta $P$ es:
$$s = \sqrt{x^2 + y^2}$$
$$dE = \frac{k\,dq}{s^2} = \frac{k\lambda\, dy}{x^2 + y^2}$$

**Paso 3 — Componentes:**
Descompongo $dE$ en dos direcciones:
- **Paralela a la línea ($y$):** $dE_y = dE\,\text{sen}\,\phi$ → apunta hacia arriba los elementos con $y>0$ y hacia abajo los de $y<0$.
- **Perpendicular a la línea ($x$):** $dE_x = dE\,\text{cos}\,\phi$ → **todos apuntan en el mismo sentido** (hacia $P$).

Por **simetría** ($P$ está en la perpendicular al punto medio), las componentes paralelas se cancelan por pares:
$$E_y = 0$$

**Paso 4 — Proyección de la componente perpendicular:**
De la geometría: $\text{cos}\,\phi = \dfrac{x}{s} = \dfrac{x}{\sqrt{x^2+y^2}}$, entonces:
$$dE_x = dE\,\text{cos}\,\phi = \frac{k\lambda x\, dy}{(x^2+y^2)^{3/2}}$$

**Paso 5 — Integración (línea finita: de $-L/2$ a $+L/2$):**
$$E = \int_{-L/2}^{+L/2} \frac{k\lambda x\, dy}{(x^2+y^2)^{3/2}} = k\lambda x \int_{-L/2}^{+L/2} \frac{dy}{(x^2+y^2)^{3/2}}$$

**Paso 6 — Integral (tabla o trigonometría con $y = x\tan\phi$):**
$$\int \frac{dy}{(x^2+y^2)^{3/2}} = \frac{y}{x^2\sqrt{x^2+y^2}}$$

Aplico los límites:
$$\left[\frac{y}{x^2\sqrt{x^2+y^2}}\right]_{-L/2}^{+L/2} = \frac{L/2}{x^2\sqrt{x^2+\frac{L^2}{4}}} - \frac{-L/2}{x^2\sqrt{x^2+\frac{L^2}{4}}} = \frac{L}{x^2\sqrt{x^2+\frac{L^2}{4}}}$$

**Paso 7 — Resultado:**
$$E = k\lambda x \cdot \frac{L}{x^2\sqrt{x^2+\frac{L^2}{4}}}$$

$$\boxed{E = \frac{k\lambda L}{x\sqrt{x^2 + \dfrac{L^2}{4}}}}$$

**Paso 8 — Forma con ángulos (la más usada en examen):**
Sea $\theta$ el ángulo entre la perpendicular y la línea que une $P$ con un extremo. De la geometría:
$$\text{sen}\,\theta = \frac{L/2}{\sqrt{x^2+\frac{L^2}{4}}} \qquad \Rightarrow \qquad \frac{L}{\sqrt{x^2+\frac{L^2}{4}}} = 2\,\text{sen}\,\theta$$

Sustituyo en el resultado:
$$E = \frac{k\lambda}{x}\cdot\frac{L}{\sqrt{x^2+\frac{L^2}{4}}}$$

$$\boxed{E = \frac{k\lambda}{x}\left(\text{sen}\,\theta_1 + \text{sen}\,\theta_2\right) = \frac{2k\lambda}{x}\,\text{sen}\,\theta}$$

> [!tip] Caso general (P sin caer sobre la perpendicular)
> Si $P$ está a distancia $x$ de la línea pero **desalineado** del centro, cada extremo subtiende su propio ángulo ($\theta_1$ y $\theta_2$) respecto de la perpendicular y se suman:
> $$E = \frac{k\lambda}{x}\left(\text{sen}\,\theta_1 + \text{sen}\,\theta_2\right)$$
> En el caso simétrico $\theta_1 = \theta_2 = \theta$ y vuelve el resultado anterior.

> [!success] Comprobaciones y casos límite
> - **Línea muy larga ($L \to \infty \Rightarrow \theta \to 90°$, $\text{sen}\,\theta \to 1$):** $E = \dfrac{2k\lambda}{x} = \dfrac{\lambda}{2\pi\epsilon_0 x}$ → **línea infinita** (mismo resultado que con la Ley de Gauss → [[#6. Simetría cilíndrica (cilindro o línea infinita)]]) ✔
> - **Muy lejos ($x \gg L \Rightarrow \text{sen}\,\theta \approx \theta \approx \dfrac{L}{2x}$):** $E \approx \dfrac{2k\lambda}{x}\cdot\dfrac{L}{2x} = \dfrac{k\lambda L}{x^2} = \dfrac{kQ}{x^2}$ con $Q = \lambda L$ → **carga puntual** ✔
> - Dirección: **perpendicular a la línea**, hacia afuera si $\lambda>0$ ✔
> - $E$ disminuye al alejarse ($x$ en el denominador) ✔

---

## 2. Anillo uniforme de carga (en su eje)

> [!example] Resultado
> $$E = \frac{kQz}{(z^2+R^2)^{3/2}} = \frac{1}{4\pi\epsilon_0}\frac{Qz}{(z^2+R^2)^{3/2}} \quad \text{(N/C o V/m)}$$

**Geometría:** anillo de radio $R$ y carga total $Q$, contenido en el plano $xy$ con centro en el origen. Punto $P$ sobre el eje $z$ a distancia $z$ del centro.

**Paso 1 — Elemento de carga:**
Subtendiendo un ángulo $d\theta$:
$$dq = \lambda R\, d\theta = \frac{Q}{2\pi R}R\, d\theta = \frac{Q}{2\pi}\,d\theta$$

**Paso 2 — Distancia y campo del elemento:**
Todos los elementos del anillo están a la misma distancia de $P$:
$$s = \sqrt{R^2 + z^2}$$
$$dE = \frac{k\,dq}{s^2} = \frac{k\,dq}{R^2+z^2}$$

**Paso 3 — Componentes y simetría:**
- **Componente axial ($z$):** $dE_z = dE\cos\phi$, con $\cos\phi = \dfrac{z}{s} = \dfrac{z}{\sqrt{R^2+z^2}}$
- **Componentes radiales (perpendiculares al eje):** los elementos opuestos ($\theta$ y $\theta+\pi$) generan componentes **iguales y opuestas** → se cancelan.

$$E_{\perp} = 0$$

**Paso 4 — Expresión de la componente axial:**
$$dE_z = \frac{k\,dq}{(R^2+z^2)}\cdot\frac{z}{\sqrt{R^2+z^2}} = \frac{kz\,dq}{(z^2+R^2)^{3/2}}$$

**Paso 5 — Integración:**
Como $z$ y $R$ son constantes para todos los elementos, salen de la integral:
$$E = \int dE_z = \frac{kz}{(z^2+R^2)^{3/2}}\int dq$$

Y como $\int dq = Q$ (toda la carga del anillo):
$$\boxed{E = \frac{kQz}{(z^2+R^2)^{3/2}}}$$

> [!success] Comprobaciones y casos límite
> - **En el centro ($z=0$):** $E = 0$ ✔ (los campos se cancelan por simetría)
> - **Muy lejos ($z \gg R$):** $(z^2+R^2)^{3/2} \approx z^3$, entonces $E \approx \dfrac{kQz}{z^3} = \dfrac{kQ}{z^2}$ → se comporta como una **carga puntual** ✔
> - Dirección: sobre el eje, hacia afuera si $Q>0$ ✔

---

## 3. Disco cargado uniformemente (en su eje)

> [!example] Resultado
> $$E = \frac{\sigma}{2\epsilon_0}\left(1 - \frac{z}{\sqrt{z^2+R^2}}\right) \quad \text{(N/C o V/m)}$$

**Geometría:** disco de radio $R$ con densidad superficial uniforme $\sigma$, en el plano $xy$. Punto $P$ sobre el eje $z$.

**Paso 1 — Idea:** el disco es la **suma (superposición) de anillos concéntricos**. Uso el resultado del paso anterior → [[#2. Anillo uniforme de carga (en su eje)]].

**Paso 2 — Elemento de carga (anillo de radio $r$ y grosor $dr$):**
$$dq = \sigma\, dA = \sigma\,(2\pi r\, dr)$$

**Paso 3 — Campo de cada anillo diferencial:**
Reemplazo $Q \to dq$ y $R \to r$ en la fórmula del anillo:
$$dE = \frac{kz\,dq}{(z^2+r^2)^{3/2}} = \frac{kz\,\sigma\,2\pi r\,dr}{(z^2+r^2)^{3/2}}$$

(Todos apuntan en la misma dirección: a lo largo de $+z$ → **se suman**).

**Paso 4 — Integración de $r = 0$ a $r = R$:**
$$E = 2\pi k\sigma z \int_0^R \frac{r\,dr}{(z^2+r^2)^{3/2}}$$

**Paso 5 — Cambio de variable:** $u = z^2+r^2 \Rightarrow du = 2r\,dr \Rightarrow r\,dr = \dfrac{du}{2}$
- Si $r=0 \Rightarrow u=z^2$
- Si $r=R \Rightarrow u=z^2+R^2$

$$E = 2\pi k\sigma z \cdot \frac{1}{2}\int_{z^2}^{z^2+R^2} u^{-3/2}\,du = \pi k\sigma z \left[\frac{u^{-1/2}}{-1/2}\right]_{z^2}^{z^2+R^2}$$

$$E = \pi k\sigma z \left(-2\right)\left[\frac{1}{\sqrt{u}}\right]_{z^2}^{z^2+R^2} = 2\pi k\sigma z\left(\frac{1}{z} - \frac{1}{\sqrt{z^2+R^2}}\right)$$

**Paso 6 — Factor común $z$:**
$$E = 2\pi k\sigma\left(1 - \frac{z}{\sqrt{z^2+R^2}}\right)$$

**Paso 7 — Reemplazar $k = \dfrac{1}{4\pi\epsilon_0}$:**
$$2\pi k\sigma = 2\pi\sigma \cdot \frac{1}{4\pi\epsilon_0} = \frac{\sigma}{2\epsilon_0}$$

$$\boxed{E = \frac{\sigma}{2\epsilon_0}\left(1 - \frac{z}{\sqrt{z^2+R^2}}\right)}$$

> [!success] Comprobaciones y casos límite
> - **Disco infinito ($R \to \infty$):** $\dfrac{z}{\sqrt{z^2+R^2}} \to 0$, entonces $E = \dfrac{\sigma}{2\epsilon_0}$ → **plano infinito** (coincide con el resultado de Gauss → [[#7. Plano de carga infinito]]) ✔
> - **Muy lejos ($z \gg R$):** usando $(1+x)^{-1/2} \approx 1 - x/2$ con $x = R^2/z^2$:
> $E \approx \dfrac{\sigma}{2\epsilon_0}\cdot\dfrac{R^2}{2z^2} = \dfrac{\sigma\pi R^2}{4\pi\epsilon_0 z^2} = \dfrac{kQ}{z^2}$ con $Q = \sigma\pi R^2$ → **carga puntual** ✔
> - **En el plano del disco ($z=0$):** $E = \dfrac{\sigma}{2\epsilon_0}$ (máximo, para $z>0$) ✔

---

## 4. Semicircunferencia cargada (en su centro de curvatura)

> [!example] Resultado
> $$E = \frac{2k\lambda}{R} = \frac{\lambda}{2\pi\epsilon_0 R} = \frac{2\pi k Q}{L^2} \quad \text{(N/C o V/m)}$$

**Geometría:** semicircunferencia de radio $R$ y densidad lineal $\lambda$ en el plano $xy$ (parte superior, $y \geq 0$), con el **diámetro sobre el eje $x$**. Se pide el campo en el **centro de curvatura** $O$ (origen).

**Paso 1 — Elemento de carga:**
Un elemento que subtiende $d\theta$ en la posición $\theta$ (medido desde $+x$), con $\theta \in [0, \pi]$:
$$dq = \lambda R\, d\theta$$

**Paso 2 — Distancia y campo del elemento:**
Todos los elementos están a la misma distancia $R$ de $O$:
$$dE = \frac{k\,dq}{R^2} = \frac{k\lambda R\,d\theta}{R^2} = \frac{k\lambda}{R}\,d\theta$$

> [!important] Dirección
> Para $\lambda > 0$, el campo en $O$ apunta **desde el elemento hacia $O$**, o sea en la dirección $-(\cos\theta\,\hat{i} + \sin\theta\,\hat{j})$ (hacia afuera del elemento).

**Paso 3 — Componentes:**
$$dE_x = -\frac{k\lambda}{R}\cos\theta\, d\theta \qquad dE_y = -\frac{k\lambda}{R}\sin\theta\, d\theta$$

**Paso 4 — Simetría (componente horizontal):**
$$E_x = -\frac{k\lambda}{R}\int_0^\pi \cos\theta\, d\theta = -\frac{k\lambda}{R}\Big[\sin\theta\Big]_0^\pi = -\frac{k\lambda}{R}(0-0) = 0$$

Los elementos simétricos respecto del eje $y$ tienen componentes horizontales **iguales y opuestas** → se cancelan.

**Paso 5 — Componente vertical (se suman todas):**
$$E_y = -\frac{k\lambda}{R}\int_0^\pi \sin\theta\, d\theta = -\frac{k\lambda}{R}\Big[-\cos\theta\Big]_0^\pi = -\frac{k\lambda}{R}\big(1+1\big)$$

$$E_y = -\frac{2k\lambda}{R}$$

**Paso 6 — Magnitud y dirección:**
$$\boxed{E = \frac{2k\lambda}{R} = \frac{\lambda}{2\pi\epsilon_0 R}}$$

**Dirección:** eje de simetría, **perpendicular al diámetro**, apuntando hacia el lado opuesto al arco (hacia "afuera" del arco) si $\lambda > 0$.

**Paso 7 — En función de $Q$ y de la longitud del arco $L$:**
$$L = \pi R \Rightarrow R = \frac{L}{\pi} \qquad \lambda = \frac{Q}{L}$$

$$E = \frac{2k\lambda}{R} = \frac{2k\left(\dfrac{Q}{L}\right)}{\dfrac{L}{\pi}} = \frac{2\pi k Q}{L^2}$$

> [!success] Comprobaciones
> - Si fuera la **circunferencia completa**, por simetría $E = 0$ (todos los $\cos$ se cancelan) ✔
> - $E \propto \lambda$ y $E \propto 1/R$ (más cerca del centro → mayor campo) ✔

---
---

# 🧲 PARTE B — Ley de Gauss

> [!warning] Ley de Gauss
> $$\oint \vec{E}\cdot d\vec{A} = \frac{q_{encerrada}}{\epsilon_0}$$
> **Pasos universales:**
> 1. Identificar la **simetría** de la distribución de carga (esférica, cilíndrica o plana).
> 2. Elegir la **superficie gaussiana** correcta (esfera, cilindro o "pillbox").
> 3. Verificar que $\vec{E}$ sea **paralelo o perpendicular** a $d\vec{A}$ en cada tramo y que sea **constante** sobre cada tramo.
> 4. Resolver: $\oint \vec{E}\cdot d\vec{A} = E \cdot A_{efectiva} = \dfrac{q_{enc}}{\epsilon_0}$.

---

## 5. Simetría esférica (esfera cargada)

> [!example] Resultado
> $$E = \frac{1}{4\pi\epsilon_0}\frac{q_{enc}}{r^2} = k\frac{q_{enc}}{r^2} \quad \text{(N/C o V/m)}$$

**Geometría:** carga total $Q$ distribuida con simetría esférica (esfera sólida uniforme de radio $R$ o carga puntual). Punto a distancia $r$ del centro.

**Paso 1 — Simetría:** el campo debe ser **radial** (no hay dirección privilegiada) y su magnitud depende **solo de $r$**.

**Paso 2 — Superficie gaussiana:** esfera de radio $r$ centrada en la carga.
- $\vec{E}$ es **paralelo** a $d\vec{A}$ (ambos radiales) en toda la superficie → $\vec{E}\cdot d\vec{A} = E\,dA$.
- $E$ es **constante** en toda la esfera → sale de la integral.

**Paso 3 — Integral de superficie:**
$$\oint \vec{E}\cdot d\vec{A} = E\oint dA = E\,(4\pi r^2)$$

**Paso 4 — Igualo con la carga encerrada:**
$$E\,(4\pi r^2) = \frac{q_{enc}}{\epsilon_0}$$

**Paso 5 — Despejo:**
$$\boxed{E = \frac{1}{4\pi\epsilon_0}\frac{q_{enc}}{r^2} = k\frac{q_{enc}}{r^2}}$$

**Paso 6 — Carga encerrada según la región:**

**(a) Fuera de la esfera ($r \geq R$):** toda la carga está dentro
$$q_{enc} = Q \qquad \Rightarrow \qquad E = k\frac{Q}{r^2}$$

**(b) Dentro de la esfera ($r < R$), carga uniforme en el volumen:** $\rho = \dfrac{Q}{\frac{4}{3}\pi R^3}$
$$q_{enc} = \rho\cdot\frac{4}{3}\pi r^3 = Q\frac{r^3}{R^3}$$
$$E = k\frac{Q r^3/R^3}{r^2} = k\frac{Q}{R^3}\,r \qquad \Rightarrow \qquad E \propto r \,(\text{crece linealmente})$$

**(c) Esfera conductora hueca en equilibrio:** $q_{enc}=0$ para $r<R$ → $E = 0$ dentro, y toda la carga reside en la superficie.

> [!success] Comprobaciones
> - En $r = R$ las tres expresiones coinciden: $E = kQ/R^2$ ✔
> - $r>R$ se comporta como una **carga puntual** ✔
> - Dentro de un conductor en equilibrio: $E = 0$ ✔

---

## 6. Simetría cilíndrica (cilindro o línea infinita)

> [!example] Resultado
> $$E = \frac{\lambda}{2\pi\epsilon_0 r} = \frac{2k\lambda}{r} \quad \text{(N/C o V/m)}$$

**Geometría:** cilindro conductor/aislante infinito de radio $R$ con densidad lineal $\lambda$ (o línea infinita). Punto a distancia $r > R$ del eje.

**Paso 1 — Simetría:** por ser infinito, el campo es **radial** (perpendicular al eje), no tiene componente axial ni azimutal, y su magnitud depende solo de $r$.

**Paso 2 — Superficie gaussiana:** cilindro coaxial de radio $r$ y longitud $L$.
Se divide en **3 tramos**: tapa superior + lateral + tapa inferior.

**Paso 3 — Flujo por las tapas:**
En las tapas, $\vec{E}$ es radial (horizontal) y $d\vec{A}$ es axial (vertical) → son **perpendiculares**:
$$\vec{E}\cdot d\vec{A} = 0 \qquad \Rightarrow \qquad \Phi_{tapas} = 0$$

**Paso 4 — Flujo por la superficie lateral:**
Aquí $\vec{E}$ y $d\vec{A}$ son **paralelos** y $E$ es constante (todos los puntos están a $r$):
$$\Phi_{lateral} = E\oint dA = E\,(2\pi r L)$$

**Paso 5 — Flujo total:**
$$\oint \vec{E}\cdot d\vec{A} = 0 + E(2\pi r L) + 0 = E\,2\pi r L$$

**Paso 6 — Carga encerrada:**
$$q_{enc} = \lambda L$$

**Paso 7 — Aplico la Ley de Gauss:**
$$E\,(2\pi r L) = \frac{\lambda L}{\epsilon_0}$$

Se cancela la longitud $L$ (el resultado no depende del largo elegido):
$$\boxed{E = \frac{\lambda}{2\pi\epsilon_0 r} = \frac{2k\lambda}{r}}$$

> [!success] Comprobaciones
> - Mismo resultado que por integración → [[#1. Línea recta infinita cargada]] ✔
> - $E \propto 1/r$ ✔
> - **Dentro del conductor ($r<R$):** $q_{enc} = 0$ → $E = 0$ ✔

---

## 7. Plano de carga infinito

> [!example] Resultado
> $$E = \frac{\sigma}{2\epsilon_0} \quad \text{(N/C o V/m)}$$

**Geometría:** plano infinito con densidad superficial uniforme $\sigma$.

**Paso 1 — Simetría:** el campo es **perpendicular al plano** (los componentes paralelos se cancelan por simetría), tiene igual magnitud en ambos lados y **no depende de la distancia** al plano.

**Paso 2 — Superficie gaussiana:** cilindro ("pillbox") que **atraviesa** el plano, con tapas de área $A$ paralelas al plano, una a cada lado.

**Paso 3 — Flujo por las tapas:**
$\vec{E}$ es perpendicular al plano, o sea **paralelo** a $d\vec{A}$ en las tapas (hacia afuera en ambos sentidos):
$$\Phi_{tapa\,1} = E A \qquad \Phi_{tapa\,2} = E A$$

**Paso 4 — Flujo por la pared lateral:**
$\vec{E}$ es perpendicular al plano → **paralelo a la pared** del cilindro → perpendicular a $d\vec{A}$:
$$\Phi_{lateral} = 0$$

**Paso 5 — Flujo total:**
$$\oint \vec{E}\cdot d\vec{A} = EA + EA + 0 = 2EA$$

**Paso 6 — Carga encerrada:** el plano queda cortado por el área $A$ de las tapas:
$$q_{enc} = \sigma A$$

**Paso 7 — Aplico la Ley de Gauss:**
$$2EA = \frac{\sigma A}{\epsilon_0}$$

Se cancela el área $A$:
$$\boxed{E = \frac{\sigma}{2\epsilon_0}}$$

> [!success] Comprobaciones
> - $E$ **no depende de la distancia** → campo uniforme ✔
> - Coincide con el disco infinito ($R\to\infty$) → [[#3. Disco cargado uniformemente (en su eje)]] ✔
> - Si $\sigma > 0$: campo hacia afuera en ambos lados; si $\sigma < 0$: hacia adentro ✔

---

## 8. Dos placas con la MISMA carga (mismo signo)

> [!example] Resultado
> $$E_{entre} = 0 \qquad\qquad E_{fuera} = \frac{\sigma}{\epsilon_0}$$

**Geometría:** dos planos infinitos paralelos, **ambos con $\sigma > 0$** (o ambos negativos), separados por distancia $d$.

**Paso 1 — Campo de cada placa por separado (principio de superposición):**
Por la Ley de Gauss, cada plano genera → [[#7. Plano de carga infinito]]:
$$E_1 = \frac{\sigma}{2\epsilon_0} \qquad E_2 = \frac{\sigma}{2\epsilon_0}$$

**Paso 2 — Direcciones:**
- Placa 1 (izquierda): campo **hacia afuera** → a la derecha ($+$) y a la izquierda ($-$).
- Placa 2 (derecha): campo **hacia afuera** → a la derecha ($+$) y a la izquierda ($-$).

**Paso 3 — Región ENTRE las placas:**
$E_1$ apunta hacia la derecha (hacia la placa 2) y $E_2$ apunta hacia la izquierda (hacia la placa 1) → **se oponen**:
$$E_{entre} = \frac{\sigma}{2\epsilon_0} - \frac{\sigma}{2\epsilon_0} = 0$$

**Paso 4 — Región FUERA de las placas:**
Ambos campos apuntan en el **mismo sentido** → **se suman**:
$$E_{fuera} = \frac{\sigma}{2\epsilon_0} + \frac{\sigma}{2\epsilon_0} = \frac{\sigma}{\epsilon_0}$$

> [!success] Interpretación
> - Entre placas del **mismo signo** no hay campo → las cargas se "repelan" y se van a los bordes exteriores (por eso en los capacitores se usan cargas **opuestas**).

---

## 9. Placas paralelas con carga opuesta (capacitor)

> [!example] Resultado
> $$E_{entre} = \frac{\sigma}{\epsilon_0} = \frac{V}{d} \qquad\qquad E_{fuera} = 0$$
> $$C = \frac{\epsilon_0 A}{d}$$

**Geometría:** dos placas conductoras paralelas de área $A$ separadas por $d$, con cargas $+\sigma$ y $-\sigma$ (capacitor).

**Paso 1 — Campo de cada placa:** → [[#7. Plano de carga infinito]]
$$E_1 = \frac{\sigma}{2\epsilon_0} \qquad E_2 = \frac{\sigma}{2\epsilon_0}$$

**Paso 2 — Región ENTRE las placas (de $+$ hacia $-$):**
- $E_1$ (placa positiva) apunta **hacia la placa negativa**.
- $E_2$ (placa negativa) apunta **hacia sí misma** (hacia la placa positiva).
- Ambos apuntan en el **mismo sentido** → **se suman**:

$$E_{entre} = \frac{\sigma}{2\epsilon_0} + \frac{\sigma}{2\epsilon_0} = \boxed{\frac{\sigma}{\epsilon_0}}$$

**Paso 3 — Región FUERA de las placas:**
- Del lado izquierdo: $E_1$ apunta a la izquierda (fuera de la positiva) y $E_2$ apunta a la derecha (hacia la negativa) → se cancelan.
$$E_{fuera} = \frac{\sigma}{2\epsilon_0} - \frac{\sigma}{2\epsilon_0} = 0$$
- Del lado derecho ocurre lo mismo por simetría → $E = 0$.

**Paso 4 — Relación entre $E$ y $V$:**
El campo entre las placas es **uniforme**, así que el potencial cae linealmente:
$$\Delta V = E\cdot d \qquad \Rightarrow \qquad \boxed{E = \frac{V}{d}}$$

**Paso 5 — Capacitancia:**
$$C = \frac{Q}{V}$$
La carga de cada placa: $Q = \sigma A \Rightarrow \sigma = \dfrac{Q}{A}$. Sustituyo $\sigma$ en $E$ y uso $E = V/d$:
$$\frac{V}{d} = \frac{\sigma}{\epsilon_0} = \frac{Q}{\epsilon_0 A} \qquad \Rightarrow \qquad V = \frac{Q d}{\epsilon_0 A}$$

$$C = \frac{Q}{V} = \frac{Q}{\dfrac{Q d}{\epsilon_0 A}}$$

$$\boxed{C = \frac{\epsilon_0 A}{d} \quad \text{(F)}}$$

> [!success] Comprobaciones
> - $E_{fuera} = 0$ → todo el campo queda **confinado entre las placas** (es donde se almacena la energía) ✔
> - $C \propto A$ (más área → más capacitancia) y $C \propto 1/d$ (menos distancia → más capacitancia) ✔
> - Con dieléctrico: $C = K\epsilon_0 A/d$ y $E = E_0/K$ ✔

---

> [!tip] Resumen rápido de las 9 demostraciones
> | Caso | Método | Resultado |
> |------|--------|-----------|
> | Línea infinita | Integración | $E = \dfrac{\lambda}{2\pi\epsilon_0 r}$ |
> | Anillo (eje) | Integración | $E = \dfrac{kQz}{(z^2+R^2)^{3/2}}$ |
> | Disco (eje) | Integración (anillos) | $E = \dfrac{\sigma}{2\epsilon_0}\left(1-\dfrac{z}{\sqrt{z^2+R^2}}\right)$ |
> | Semicircunferencia | Integración | $E = \dfrac{2k\lambda}{R} = \dfrac{2\pi kQ}{L^2}$ |
> | Esfera | Gauss (esfera) | $E = k\dfrac{q_{enc}}{r^2}$ |
> | Cilindro / línea | Gauss (cilindro) | $E = \dfrac{\lambda}{2\pi\epsilon_0 r}$ |
> | Plano infinito | Gauss (pillbox) | $E = \dfrac{\sigma}{2\epsilon_0}$ |
> | 2 placas mismo signo | Superposición | $E_{entre}=0,\; E_{fuera}=\dfrac{\sigma}{\epsilon_0}$ |
> | Capacitor ($\pm\sigma$) | Superposición | $E_{entre}=\dfrac{\sigma}{\epsilon_0}=\dfrac{V}{d},\; C=\dfrac{\epsilon_0 A}{d}$ |

📄 [[Unidad 1 -Fuerzas y Campos Eléctricos.pdf|Ver PDF Unidad 1]]
