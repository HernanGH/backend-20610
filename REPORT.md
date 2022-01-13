# REPORT

## artillery

#### Result of profiling with node without `console.log`

```
 [Summary]:
   ticks  total  nonlib   name
     32    1.6%    1.7%  JavaScript
   1845   94.3%   98.0%  C++
    119    6.1%    6.3%  GC
     74    3.8%          Shared libraries
      5    0.3%          Unaccounted
```

#### Result of profiling with node with `console.log`


```
 [Summary]:
   ticks  total  nonlib   name
     25    1.3%    1.4%  JavaScript
   1747   93.9%   98.3%  C++
    114    6.1%    6.4%  GC
     83    4.5%          Shared libraries
      5    0.3%          Unaccounted
```


## Autocannon

#### without `console.log`

```
Running all benchmarks in parallel ...
Running 20s test @ http://localhost:3000/info
100 connections

┌─────────┬────────┬────────┬────────┬────────┬───────────┬──────────┬────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │ Max    │
├─────────┼────────┼────────┼────────┼────────┼───────────┼──────────┼────────┤
│ Latency │ 109 ms │ 205 ms │ 412 ms │ 448 ms │ 219.39 ms │ 81.22 ms │ 776 ms │
└─────────┴────────┴────────┴────────┴────────┴───────────┴──────────┴────────┘
┌───────────┬────────┬────────┬────────┬────────┬────────┬─────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%    │ 97.5%  │ Avg    │ Stdev   │ Min    │
├───────────┼────────┼────────┼────────┼────────┼────────┼─────────┼────────┤
│ Req/Sec   │ 324    │ 324    │ 427    │ 651    │ 453.35 │ 98.07   │ 324    │
├───────────┼────────┼────────┼────────┼────────┼────────┼─────────┼────────┤
│ Bytes/Sec │ 124 kB │ 124 kB │ 163 kB │ 249 kB │ 173 kB │ 37.5 kB │ 124 kB │
└───────────┴────────┴────────┴────────┴────────┴────────┴─────────┴────────┘

Req/Bytes counts sampled once per second.

9k requests in 20.11s, 3.46 MB read
```

#### with `console.log`

```
Running all benchmarks in parallel ...
Running 20s test @ http://localhost:3000/info
100 connections

┌─────────┬────────┬────────┬────────┬────────┬───────────┬──────────┬────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │ Max    │
├─────────┼────────┼────────┼────────┼────────┼───────────┼──────────┼────────┤
│ Latency │ 109 ms │ 196 ms │ 375 ms │ 522 ms │ 206.49 ms │ 71.76 ms │ 654 ms │
└─────────┴────────┴────────┴────────┴────────┴───────────┴──────────┴────────┘
┌───────────┬─────────┬─────────┬────────┬────────┬────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%    │ 97.5%  │ Avg    │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼────────┼────────┼────────┼─────────┼─────────┤
│ Req/Sec   │ 216     │ 216     │ 494    │ 677    │ 482.3  │ 90.81   │ 216     │
├───────────┼─────────┼─────────┼────────┼────────┼────────┼─────────┼─────────┤
│ Bytes/Sec │ 82.6 kB │ 82.6 kB │ 189 kB │ 259 kB │ 184 kB │ 34.7 kB │ 82.5 kB │
└───────────┴─────────┴─────────┴────────┴────────┴────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.

10k requests in 20.12s, 3.68 MB read
```

## Flame Graphs

#### with `console.log`

![](/graphs/con_log.png)

#### without `console.log`

![](/graphs/sin_log.png)


## Conclusion

`
Una simple linea de console.log, no hace mucho la diferencia, vemos que los resultados son bastante similares
`