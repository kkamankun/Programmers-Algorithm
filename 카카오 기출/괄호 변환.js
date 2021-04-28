function solution(s) {
    let n = s.length;
    if (n === 1)
        return 1;
    let answer = [];
    for (let unit = 1; unit <= n / 2; unit++) {
        let candidate = "";
        let cnt = 1;
        for (let j = 0; j < n; j += unit) {
            let unit_s = s.substring(j, unit + j);
            let n_unit_s = s.substring(unit + j, unit * 2 + j);
            if (unit_s === n_unit_s)
                cnt += 1;
            else {
                if (cnt === 1)
                    candidate += unit_s;
                else
                    candidate += String(cnt) + unit_s; 
                cnt = 1;
            }
        }
        answer.push(candidate.length);
    }
    let min = Math.min.apply(null, answer);
    return min;
}
