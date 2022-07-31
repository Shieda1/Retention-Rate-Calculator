// https://calculator.swiftutors.com/retention-rate-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const retentionRateRadio = document.getElementById('retentionRateRadio');
const annualDividendPerShareRadio = document.getElementById('annualDividendPerShareRadio');
const earningsPerShareRadio = document.getElementById('earningsPerShareRadio');

let retentionRate;
let annualDividendPerShare = v1;
let earningsPerShare = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

retentionRateRadio.addEventListener('click', function() {
  variable1.textContent = 'Annual Dividend Per Share';
  variable2.textContent = 'Earnings Per Share';
  annualDividendPerShare = v1;
  earningsPerShare = v2;
  result.textContent = '';
});

annualDividendPerShareRadio.addEventListener('click', function() {
  variable1.textContent = 'Retention Rate';
  variable2.textContent = 'Earnings Per Share';
  retentionRate = v1;
  earningsPerShare = v2;
  result.textContent = '';
});

earningsPerShareRadio.addEventListener('click', function() {
  variable1.textContent = 'Retention Rate';
  variable2.textContent = 'Annual Dividend Per Share';
  retentionRate = v1;
  annualDividendPerShare = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(retentionRateRadio.checked)
    result.textContent = `Retention Rate = ${computeRetentionRate().toFixed(2)} %`;

  else if(annualDividendPerShareRadio.checked)
    result.textContent = `Annual Dividend Per Share = ${computeAnnualDividendPerShare().toFixed(2)}`;

  else if(earningsPerShareRadio.checked)
    result.textContent = `Earnings Per Share = ${computeEarningsPerShare().toFixed(2)}`;
})

// calculation

function computeRetentionRate() {
  return (1 - (Number(annualDividendPerShare.value) / Number(earningsPerShare.value))) * 100;
}

function computeAnnualDividendPerShare() {
  return Number(earningsPerShare.value) - ((Number(retentionRate.value) / 100) * Number(earningsPerShare.value));
}

function computeEarningsPerShare() {
  return -Number(annualDividendPerShare.value) / ((Number(retentionRate.value) / 100) - 1);
}