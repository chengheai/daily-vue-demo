<template>
<div class="f-c-c">
  <div class="slinky">
    <div class="slinky__ring"></div>
    <div class="slinky__ring"></div>
    <div class="slinky__ring"></div>
    <div class="slinky__ring"></div>
    <div class="slinky__ring"></div>
    <div class="slinky__ring"></div>
    <div class="slinky__ring"></div>
    <div class="slinky__ring"></div>
    <div class="slinky__ring"></div>
    <div class="slinky__ring"></div>
    <div class="slinky__ring"></div>
    <div class="slinky__ring"></div>
    <div class="slinky__ring"></div>
  </div>
  <div class="l-text">
    <p>l</p>
    <p>o</p>
    <p>a</p>
    <p>d</p>
    <p>i</p>
    <p>n</p>
    <p>g</p>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
* {
  border: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  font-size: calc(16px + (24 - 16) * (100vw - 320px) / (1280 - 320));
}
.f-c-c{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.slinky {
  animation: camera 2s ease-in-out infinite;
  position: relative;
  margin-bottom: 100px;
  width: 8em;
  height: 14em;
}
.slinky__ring {
  border-radius: 50%;
  box-shadow: 0 0 0 0.25em #255ff4 inset, 0 0 4.5em rgba(37, 95, 244, 0.3) inset,
    0 0 4.25em rgba(37, 95, 244, 0.3);
  position: absolute;
  left: 0;
  width: inherit;
  height: 4em;
  transform: translateY(0) rotateZ(0) rotateX(0) translateX(-0.75em);
  transform-origin: 100% 50%;
}
.slinky__ring:nth-child(1) {
  animation: move1 2s linear infinite;
  bottom: 0em;
}
.slinky__ring:nth-child(2) {
  animation: move2 2s linear infinite;
  bottom: 0.25em;
}
.slinky__ring:nth-child(3) {
  animation: move3 2s linear infinite;
  bottom: 0.5em;
}
.slinky__ring:nth-child(4) {
  animation: move4 2s linear infinite;
  bottom: 0.75em;
}
.slinky__ring:nth-child(5) {
  animation: move5 2s linear infinite;
  bottom: 1em;
}
.slinky__ring:nth-child(6) {
  animation: move6 2s linear infinite;
  bottom: 1.25em;
}
.slinky__ring:nth-child(7) {
  animation: move7 2s linear infinite;
  bottom: 1.5em;
}
.slinky__ring:nth-child(8) {
  animation: move8 2s linear infinite;
  bottom: 1.75em;
}
.slinky__ring:nth-child(9) {
  animation: move9 2s linear infinite;
  bottom: 2em;
}
.slinky__ring:nth-child(10) {
  animation: move10 2s linear infinite;
  bottom: 2.25em;
}
.slinky__ring:nth-child(11) {
  animation: move11 2s linear infinite;
  bottom: 2.5em;
}
.slinky__ring:nth-child(12) {
  animation: move12 2s linear infinite;
  bottom: 2.75em;
}
.slinky__ring:nth-child(13) {
  animation: move13 2s linear infinite;
  bottom: 3em;
}

@keyframes camera {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-9.5em);
  }
}
@keyframes move13 {
  0% {
    transform: translateY(0em) rotateZ(0) rotateX(0) translateX(-0.75em);
  }
  35% {
    transform: translateY(0em) rotateZ(180deg) rotateX(180deg)
      translateX(-0.75em);
  }
  40%,
  100% {
    transform: translateY(3em) rotateZ(180deg) rotateX(180deg)
      translateX(-0.75em);
  }
}
@keyframes move12 {
  0% {
    transform: translateY(0) rotateZ(0) rotateX(0) translateX(-0.75em);
  }
  5% {
    transform: translateY(-0.25em) rotateZ(0) rotateX(0) translateX(-0.75em);
  }
  40% {
    transform: translateY(-0.25em) rotateZ(180deg) rotateX(180deg)
      translateX(-0.75em);
  }
  45%,
  100% {
    transform: translateY(2.5em) rotateZ(180deg) rotateX(180deg)
      translateX(-0.75em);
  }
}
@keyframes move11 {
  5% {
    transform: translateY(0) rotateZ(0) rotateX(0) translateX(-0.75em);
  }
  10% {
    transform: translateY(-0.5em) rotateZ(0) rotateX(0) translateX(-0.75em);
  }
  45% {
    transform: translateY(-0.5em) rotateZ(180deg) rotateX(180deg)
      translateX(-0.75em);
  }
  50%,
  100% {
    transform: translateY(2em) rotateZ(180deg) rotateX(180deg)
      translateX(-0.75em);
  }
}
@keyframes move10 {
  10% {
    transform: translateY(0) rotateZ(0) rotateX(0) translateX(-0.75em);
  }
  15% {
    transform: translateY(-0.75em) rotateZ(0) rotateX(0) translateX(-0.75em);
  }
  50% {
    transform: translateY(-0.75em) rotateZ(180deg) rotateX(180deg)
      translateX(-0.75em);
  }
  55%,
  100% {
    transform: translateY(1.5em) rotateZ(180deg) rotateX(180deg)
      translateX(-0.75em);
  }
}
@keyframes move9 {
  15% {
    transform: translateY(0) rotateZ(0) rotateX(0) translateX(-0.75em);
  }
  20% {
    transform: translateY(-1em) rotateZ(0) rotateX(0) translateX(-0.75em);
  }
  55% {
    transform: translateY(-1em) rotateZ(180deg) rotateX(180deg)
      translateX(-0.75em);
  }
  60%,
  100% {
    transform: translateY(1em) rotateZ(180deg) rotateX(180deg)
      translateX(-0.75em);
  }
}
@keyframes move8 {
  20% {
    transform: translateY(0) rotateZ(0) rotateX(0) translateX(-0.75em);
  }
  25% {
    transform: translateY(-1.25em) rotateZ(0) rotateX(0) translateX(-0.75em);
  }
  60% {
    transform: translateY(-1.25em) rotateZ(180deg) rotateX(180deg)
      translateX(-0.75em);
  }
  65%,
  100% {
    transform: translateY(0.5em) rotateZ(180deg) rotateX(180deg)
      translateX(-0.75em);
  }
}
@keyframes move7 {
  25% {
    transform: translateY(0) rotateZ(0) rotateX(0) translateX(-0.75em);
  }
  30% {
    transform: translateY(-1.5em) rotateZ(0) rotateX(0) translateX(-0.75em);
  }
  65% {
    transform: translateY(-1.5em) rotateZ(180deg) rotateX(180deg)
      translateX(-0.75em);
  }
  70%,
  100% {
    transform: translateY(0em) rotateZ(180deg) rotateX(180deg)
      translateX(-0.75em);
  }
}
@keyframes move6 {
  30% {
    transform: translateY(0) rotateZ(0) rotateX(0) translateX(-0.75em);
  }
  35% {
    transform: translateY(-1.75em) rotateZ(0) rotateX(0) translateX(-0.75em);
  }
  70% {
    transform: translateY(-1.75em) rotateZ(180deg) rotateX(180deg)
      translateX(-0.75em);
  }
  75%,
  100% {
    transform: translateY(-0.5em) rotateZ(180deg) rotateX(180deg)
      translateX(-0.75em);
  }
}
@keyframes move5 {
  35% {
    transform: translateY(0) rotateZ(0) rotateX(0) translateX(-0.75em);
  }
  40% {
    transform: translateY(-2em) rotateZ(0) rotateX(0) translateX(-0.75em);
  }
  75% {
    transform: translateY(-2em) rotateZ(180deg) rotateX(180deg)
      translateX(-0.75em);
  }
  80%,
  100% {
    transform: translateY(-1em) rotateZ(180deg) rotateX(180deg)
      translateX(-0.75em);
  }
}
@keyframes move4 {
  40% {
    transform: translateY(0) rotateZ(0) rotateX(0) translateX(-0.75em);
  }
  45% {
    transform: translateY(-2.25em) rotateZ(0) rotateX(0) translateX(-0.75em);
  }
  80% {
    transform: translateY(-2.25em) rotateZ(180deg) rotateX(180deg)
      translateX(-0.75em);
  }
  85%,
  100% {
    transform: translateY(-1.5em) rotateZ(180deg) rotateX(180deg)
      translateX(-0.75em);
  }
}
@keyframes move3 {
  45% {
    transform: translateY(0) rotateZ(0) rotateX(0) translateX(-0.75em);
  }
  50% {
    transform: translateY(-2.5em) rotateZ(0) rotateX(0) translateX(-0.75em);
  }
  85% {
    transform: translateY(-2.5em) rotateZ(180deg) rotateX(180deg)
      translateX(-0.75em);
  }
  90%,
  100% {
    transform: translateY(-2em) rotateZ(180deg) rotateX(180deg)
      translateX(-0.75em);
  }
}
@keyframes move2 {
  50% {
    transform: translateY(0) rotateZ(0) rotateX(0) translateX(-0.75em);
  }
  55% {
    transform: translateY(-2.75em) rotateZ(0) rotateX(0) translateX(-0.75em);
  }
  90% {
    transform: translateY(-2.75em) rotateZ(180deg) rotateX(180deg)
      translateX(-0.75em);
  }
  95%,
  100% {
    transform: translateY(-2.5em) rotateZ(180deg) rotateX(180deg)
      translateX(-0.75em);
  }
}
@keyframes move1 {
  55% {
    transform: translateY(0) rotateZ(0) rotateX(0) translateX(-0.75em);
  }
  60% {
    transform: translateY(-3em) rotateZ(0) rotateX(0) translateX(-0.75em);
  }
  95%,
  100% {
    transform: translateY(-3em) rotateZ(180deg) rotateX(180deg)
      translateX(-0.75em);
  }
}
.l-text{
  text-align: center;
p {
  display: inline-block;
  text-transform: uppercase;
  text-align: center;
  font-size: 4em;
  font-family: arial;
  font-weight: 600;
  transform: scale(.5);
  color: #121212;
  -webkit-text-stroke: 2px gray;
}

p:nth-child(1) {
  animation: hover 1s linear infinite;
}

p:nth-child(2) {
  animation: hover 1s linear infinite .125s;
}

p:nth-child(3) {
  animation: hover 1s linear infinite .25s;
}

p:nth-child(4) {
  animation: hover 1s linear infinite .375s;
}

p:nth-child(5) {
  animation: hover 1s linear infinite .5s;
}

p:nth-child(6) {
  animation: hover 1s linear infinite .675s;
}

p:nth-child(7) {
  animation: hover 1s linear infinite .75s;
}

@keyframes hover {
  0% {
    transform: scale(.7);
    color: #121212;
    -webkit-text-stroke: 2px gray;
  }

  20% {
    transform: scale(1);
    color: pink;
    -webkit-text-stroke: 3px red;
    filter: drop-shadow(0 0 1px black)drop-shadow(0 0 1px black)drop-shadow(0 0 3px red)drop-shadow(0 0 5px red)hue-rotate(10turn);
  }

  50% {
    transform: scale(.5);
    color: #121212;
    -webkit-text-stroke: 2px gray;
  }
}
}
</style>
