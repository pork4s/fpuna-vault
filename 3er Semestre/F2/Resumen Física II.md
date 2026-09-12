# Resumen — Física II (F2)

Resumen general de las tres notas (PDF) de la carpeta **F2** (Facultad Politécnica, Universidad Nacional de Asunción):

1.  **Unidad 1 — Fuerzas y Campos Eléctricos** (PDF)
2.  **Unidad 2 — Potencial Eléctrico** (PDF)
3.  **Unidad 3 — Circuitos de Corriente Continua** (PDF)

---

## Unidad 1: Fuerzas y Campos Eléctricos

### Carga eléctrica
- Propiedad inherente a la materia. Dos tipos: **negativa** (electrones) y **positiva** (protones).
- Cargas de **signos iguales se repelen**; de **signos opuestos se atraen**.
- **Conductores**: poseen electrones libres (metales). **Aislantes**: todos sus electrones están ligados al átomo (plástico, madera).
- **Cuantización**: `q = ±n·e`, con `n = 1, 2, 3...` y `e = 1,6×10⁻¹⁹ C` (carga elemental). Unidad SI: Coulomb (C).
- **Conservación de la carga**: la carga de un sistema aislado se conserva.
- **Electrización**:
  - **Por frotamiento**: se arrancan o añaden electrones (solo se transfieren).
  - **Por contacto**: si los cuerpos son idénticos, cada uno queda con la mitad de la carga.
  - **Por inducción**: se aproxima un cuerpo cargado sin tocarlo; se usa tierra para fijar la carga (sistema deja de ser aislado).
- **Estructura de la materia**: átomo = núcleo (protones⁺ y neutrones sin carga) + electrones⁻ orbitando. El átomo es eléctricamente neutro.

### Ley de Coulomb
- Fuerza electrostática entre dos cargas puntuales:

  `F = K·q₁·q₂ / r²`

- Dirección: la línea que une las cargas. Magnitud ∝ producto de cargas e ∝ 1/r².
- Constante eléctrica: `K = 1/(4π·ε₀) = 9×10⁹ N·m²/C²`; `ε₀ = 8,85×10⁻¹² C²/(N·m²)`.
- **Superposición**: para varias cargas, se suman vectorialmente las fuerzas de cada carga sobre la carga escogida.

### Campo eléctrico
- Definición: fuerza por unidad de carga. `E = F/q₀` · Carga puntual: `E = K·q/r²` (unidad: N/C).
- Mismo campo sobre una esfera de radio r, perpendicular a su superficie.
- **Líneas de campo**: tangentes a la dirección de E; ∝ intensidad por unidad de área; salen de cargas positivas y entran a negativas; nunca se cruzan; número de líneas ∝ magnitud de la carga.

### Distribuciones continuas de carga
- Densidades: **volumétrica** `ρ = Q/V` (C/m³), **superficial** `σ = Q/A` (C/m²), **lineal** `λ = Q/l` (C/m); en forma diferencial `ρ = dq/dV`, `σ = dq/dA`, `λ = dq/dl`.
- Campo total (principio de superposición → integral):

  `E = K∫dq/r² · r̂`

- **Línea cargada**: `E = kQ/[a(a+l)]` (dirigida hacia la carga).
- **Anillo de carga** (a lo largo de su eje): `Eₓ = KxQ/(x² + a²)^(3/2)`.
- **Disco uniforme**: `E = 2πKσ (1 − x/(R² + x²)^(1/2))`.

### Partícula cargada en campo uniforme
- Por 2ª ley de Newton: `F_R = ma → qE = ma → a = qE/m`.
- Aceleración misma dirección de E (sentido igual si q>0, contrario si q<0). Sin velocidad inicial: trayectoria rectilínea; con velocidad inicial perpendicular: parabólica.

### Flujo eléctrico y Ley de Gauss
- Flujo: `Φ_E = ∫E·dA` (superficie) / `Φ_E = ∮E·dA` (superficie cerrada). Unidad: N·m²/C.
- Campo uniforme: `Φ_E = E·A·cosθ`. Flujo ∝ número de líneas netas que atraviesan la superficie.
- **Ley de Gauss**: el flujo neto a través de una superficie cerrada es proporcional a la carga encerrada:

  `Φ_E = ∮E·dA = q_in / ε₀`

- Condiciones de la superficie gaussiana: E constante sobre toda ella y `E·dA` (paralelos).
- Disponible para configuraciones con **alta simetría**:
  - **Esfera cargada**: fuera `E = KQ/r²`; dentro `E = (KQ/a³)·r`.
  - **Línea infinita**: `E = λ/(2π·ε₀·r) = 2Kλ/r`.
  - **Plano infinito**: `E = σ/(2ε₀)`.

### Conductores en equilibrio electrostático
1. El campo eléctrico **dentro del conductor es nulo** (sólido o hueco).
2. La carga de un conductor aislado **reside en su superficie**.
3. Justo fuera del conductor el campo es perpendicular a la superficie, `E = σ/ε₀`.
4. En conductores irregulares, la densidad superficial es mayor donde el **radio de curvatura es menor**.

---

## Unidad 2: Potencial Eléctrico

### Trabajo y energía
- Trabajo: `dW = F·dr`; `W₁₋₂ = ∫F·dr`.
- Energía cinética: `T = (1/2)mv²`. Energía potencial: capacidad de realizar trabajo por posición.
- **Fuerzas conservativas**: el trabajo es independiente de la trayectoria; solo depende de posiciones inicial y final; el trabajo en trayectoria cerrada es cero.
- **Fuerza eléctrica es conservativa**. Trabajo radial: `W₁₋₂ = KqQ(1/r₁ − 1/r₂)` (cargas con signo).

### Potencial eléctrico
- Energía potencial eléctrica: `U = KqQ/r` (referencia en el infinito, U = 0).
- Trabajo = diferencia de energía potencial: `W₁₋₂ = U₁ − U₂`.
- **Potencial**: trabajo por unidad de carga (escalar) para traer una carga positiva desde el infinito:

  `V = U/q = KQ/r` · Unidad SI: Volt (V).

- Varias cargas: `V = ΣKQ/r` (suma algebraica; escalar).

### Diferencia de potencial
- `ΔV = V_A − V_B`; trabajo del campo: `W_AB = q(V_A − V_B)`.
- Definición integral: `ΔV = −∫_A^B E·ds`.
- **Conclusión**: las cargas positivas se desplazan espontáneamente hacia el menor potencial; las negativas hacia el mayor. Si hay diferencia de potencial, hay movimiento espontáneo de cargas.
- Recorriendo una línea de fuerza en su sentido, se encuentran puntos de menor potencial.

### Superficies equipotenciales
- Líneas/puntos de igual potencial; siempre **perpendiculares a las líneas de campo**. La superficie de un conductor en equilibrio es equipotencial.

### Relación campo-potencial
- `E = −dV/ds`; componentes: `Eₓ = −∂V/∂x`, `E_y = −∂V/∂y`, `E_z = −∂V/∂z`.

### Capacitores
- **Rigidez dieléctrica**: campo máximo que soporta un aislante antes de conducir (aire seco ≈ 3×10⁶ V/m). Descarga de corona en puntas (poder de las puntas).
- **Capacitancia**: `C = Q/V` · Unidad SI: faraday F = C/V.
- **Capacitor de placas paralelas**: `C = ε₀A/d` (∝ área, ∝ 1/d).

### Dieléctricos
- Al insertar un dieléctrico el voltaje disminuye: `ΔV = ΔV₀/k`, `C = k·C₀` (la capacitancia aumenta). `k > 1`.
- Ventajas: mayor capacitancia, mayor voltaje máximo de operación y soporte mecánico.
- `E_int = E₀ − E_ind` (el campo inducido reduce el campo aplicado).

### Asociación de capacitores
- **Serie**: `1/C = 1/C₁ + 1/C₂ + ...` (todos con la misma carga Q).
- **Paralelo**: `C = C₁ + C₂ + ...` (mismo voltaje en todos).

### Energía almacenada
- En un capacitor: `U = (1/2)Q²/C = (1/2)C·ΔV²`.
- Densidad de energía en el campo: `u = (1/2)ε₀E²`.

### Dipolo eléctrico
- Dos cargas opuestas de igual magnitud muy próximas.
- **Momento dipolar**: `p = q·Δr` (vector C·m; de la carga negativa a la positiva).
- En campo uniforme externo: fuerza neta nula, pero actúa un par `M = p × E₀` que tiende a alinear el dipolo con el campo.
- Ejemplo de dipolo natural: molécula de agua (CO₂ no tiene momento dipolar neto).

---

## Unidad 3: Circuitos de Corriente Continua

### Corriente eléctrica
- Movimiento ordenado de electrones a través de un conductor, originado por una diferencia de potencial.
- **I = dQ/dt** (definición de corriente). Unidad: A = C/s. Submúltiplos: mA (10⁻³), μA (10⁻⁶), nA (10⁻⁹), pA (10⁻¹²).
- La corriente **no es un vector**.
- **Tipos**: continua (sentido constante) y alterna (varía periódicamente magnitud y sentido).
- **Sentidos**: real (electrones del − al +) y convencional (positivas del + al −; el usado en el curso).
- **Densidad de corriente**: `J = I/A = n·q·v_d` (A/m²). Vectorial: `J = n·q·v_d`. Para q positiva la velocidad de arrastre sigue a E; para q negativa es contraria.

### Resistencia y Ley de Ohm
- **Resistencia**: oposición al paso de la corriente. `R = ΔV/I` (Ω = V/A).
- Conductor: `R = ρ·l/A = l/(σ·A)` (∝ longitud, ∝ 1/área).
- **Resistividad**: `ρ = E/J`, en Ω·m; depende del material y la temperatura.
- Dependencia con la temperatura: `ρ(T) = ρ₀[1 + α(T − T₀)]`; idem `R(T) = R₀[1 + α(T − T₀)]`.
- **Ley de Ohm**: `E = ρJ` y `ΔV = I·R`; materiales que la cumplen: **óhmicos** (ρ constante). Es una relación empírica, no ley fundamental. Los resistores se identifican con el **código de colores**.
- En un gráfico I vs V, la pendiente es la conductancia (1/R).

### Potencia
- `P = I·ΔV = I²R = ΔV²/R` · Unidad: watt (W = J/s).
- Energía: `W = P·t` (ej.: kWh para consumo).

### Fuerza electromotriz (fem)
- Energía por unidad de carga para llevar cargas de menor a mayor potencial: `ε = W/q`. No es una fuerza; es la diferencia de potencial máxima que puede entregar la batería (voltaje en circuito abierto).
- **Fuente ideal**: `ε = I·R` (mantiene ΔV constante, sin resistencia interna).
- **Fuente con resistencia interna r**: voltaje terminal `V_ab = ε − I·r`. Corriente en el circuito: `I = ε/(R + r)`.

### Circuitos y asociación de resistores
- **Serie**: misma corriente; `V = V₁ + V₂`; `R_eq = R₁ + R₂ + ...` (siempre mayor que cada una).
- **Paralelo**: mismo voltaje; `I = I₁ + I₂ + ...`; `1/R_eq = 1/R₁ + 1/R₂ + ...` (siempre menor que cada una).
- **Mixta**: combinación de serie y paralelo; se reducen por etapas.

### Leyes de Kirchhoff
- **Nodos** (unión de 3+ conductores) y **mallas** (trayectoria cerrada).
- **Ley de nodos**: `ΣI = 0` (conservación de carga). La corriente que entra = la que sale.
- **Ley de mallas**: `ΣV = 0` (conservación de energía).
- Convenciones de signo: resistor recorrido a favor de I → −IR; en contra → +IR; fem recorrida de − a + → +ε; al revés → −ε.
- Si una corriente calculada da negativa, su sentido real es el opuesto al asignado.

### Instrumentos de medida
- **Amperímetro**: mide corriente; se conecta **en serie**; resistencia ideal 0.
- **Voltímetro**: mide ΔV; se conecta **en paralelo**; resistencia ideal ∞.
- **Óhmetro**: mide resistencia (medidor + resistor + fuente en serie).
- **Galvanómetro**: detector muy sensible de corriente, base de los medidores analógicos.

### Circuito RC
- Capaz de cargarse/descargarse; la corriente varía con el tiempo. Constante de tiempo: `τ = RC`.
- **Carga**: `q = Cε(1 − e^(−t/RC)) = Q_f(1 − e^(−t/τ))`; `i = (ε/R)·e^(−t/RC) = I₀·e^(−t/τ)`.
- **Descarga**: `q = Q₀·e^(−t/RC)`; `i = −(Q₀/RC)e^(−t/RC) = −I₀·e^(−t/τ)`.
- Q e i son funciones exponenciales del tiempo (crecimiento/decrecimiento asintótico).

### Otros conceptos
- **FEM de una pila**: pilas/baterías generan energía eléctrica por medios químicos (oxidación en el ánodo, reducción en el cátodo); ej.: baterías de plomo-ácido.
- **Potencial de contacto**: diferencia de potencial entre partes de distinta naturaleza química/física en ausencia de corriente.
- **FEM térmicas / distribución de energía**: los sistemas de distribución actuales usan **corriente alterna** (alternadores, elevación y reducción de voltaje con transformadores).

---

## Fórmulas clave (resumen rápido)

| Concepto | Fórmula |
|---|---|
| Fuerza de Coulomb | `F = K·q₁q₂/r²` |
| Campo de carga puntual | `E = K·q/r²` |
| Ley de Gauss | `∮E·dA = q_in/ε₀` |
| Plano infinito | `E = σ/2ε₀` |
| Potencial | `V = K·Q/r` |
| d.d.p. desde campo | `ΔV = −∫E·ds` |
| Campo desde potencial | `E = −dV/ds` |
| Capacitancia | `C = Q/V` |
| Placas paralelas | `C = ε₀A/d` |
| Con dieléctrico | `C = k·C₀` |
| Energía en capacitor | `U = ½Q²/C = ½C·ΔV²` |
| Densidad de energía | `u = ½ε₀E²` |
| Momento dipolar | `p = q·Δr` |
| Corriente | `I = dQ/dt` |
| Densidad de corriente | `J = I/A = n·q·v_d` |
| Resistencia | `R = ρ·l/A = ΔV/I` |
| Resistividad-temperatura | `ρ(T) = ρ₀[1 + α(T−T₀)]` |
| Ley de Ohm | `ΔV = I·R` |
| Potencia | `P = I·ΔV = I²R = ΔV²/R` |
| FEM / voltaje terminal | `ε = W/q`; `V_ab = ε − Ir` |
| Resistencias en serie | `R_eq = R₁ + R₂ + ...` |
| Resistencias en paralelo | `1/R_eq = 1/R₁ + 1/R₂ + ...` |
| Constante de tiempo RC | `τ = RC` |
| Carga de capacitor RC | `q = Q_f(1 − e^(−t/τ))` |
| Descarga de capacitor RC | `q = Q₀·e^(−t/τ)` |