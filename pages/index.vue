<template>
    <main class="maincontent" id="maincontent">
      <div class="container-fluid fill g-0 mb-4" id="container0">
            <div class="card bg-dark text-white rounded-0">
                <img src="../public/unsplash1.jpg" class="card-img img-fluid rounded-0" alt="...">
                <div class="card-img-overlay rounded-0" style="background-color: rgba(var(--bs-tertiary-color-rgb), .5);">
                  <div class="container">
                    <h1 class="card-title dispaly-5" style="max-width: 40rem; text-shadow: 1px 1px #000;">
                      打造退休計劃從選擇ETF開始
                    </h1>
                    <p class="card-text mt-5" style="max-width: 40rem; line-height: 1.8; text-shadow: .5px .5px #000;">
                      迎接美好退休生活，智選ETF基金，贏得未來！每一筆投資，都是您退休計畫的關鍵一步。
                      ETF基金，簡單而有效，為您的財務自由劃下完美筆跡。不再被困於傳統投資的框架，讓您的資產實現更多元化的增值。
                      退休不是終結，而是新生活的開始，讓ETF基金陪您共創退休生活的華麗新章。
                      不要等待，現在就行動！選擇ETF基金，為未來的自己點燃一縷金光，讓每一份付出都成為美好退休的籌碼。<br/>
                      智慧投資，智慧生活，eTFSELECTOR 與您攜手邁向光輝的退休時光！
                    </p>
                    <p class="card-text mt-5" style="text-shadow: 1px 1px #000;">讓我們開始投資吧！</p>

                    <div class="d-grid gap-2 d-md-flex justify-content-md-start d-none d-lg-block d-xl-block">
                        <a href="/compare" class="btn btn-primary p-3 fw-4" tabindex="-1" role="button" aria-disabled="true" style="box-shadow: 1px 2px 1px #000000;">看ETF成分股</a>
                      <a href="/chart" class="btn btn-secondary p-3 fw-4" tabindex="-1" role="button" aria-disabled="true" style="box-shadow: 1px 2px 1px #000000;">看ETF報酬率</a>
                    </div>
                  </div>
              </div>
            </div>
      </div>

      <!-- content2 -->
      <div class="container overflow-hidden g-0 mb-4">
        <div class="container border border-4 border-info rounded-4 mt-4 mb-4">
          <span class="title text-center">
            <h1 class="display-4 text-primary-emphasis" style="text-shadow: 1px 1px lightblue;">
              <strong>台灣ETF近十年資產規模變化</strong>
            </h1>
          </span>
          <div class="container p-2">
            <!-- etfGrowChart   -->
            <canvas id="canvas" width="1280px" height="600px"></canvas>
          </div>
        </div>
        <div class="container p-0 mb-4">
              <figure class="p-3" style="background-color: lightgrey; border-radius: 16px;">
                <blockquote class="blockquote">
                  <p>指數型基金確實沒有什麼大不了，但他條理分明、紀律嚴謹、必要時會進行再平衡作業、透明、低週轉率、低成本、不太需要維護等。這是優秀基金經理人難以打敗指數型基金的原因之一。</p>
                </blockquote>
                <figcaption class="blockquote-footer">
                  Ben Calson (Bloomberg 專欄作家)<cite title="A Wealth of Common Sense:Why Simplicity Trumps Complexity in Any Investment Plan."></cite>
                </figcaption>
              </figure>
        </div>
      </div>

      <!-- content3 -->
        <div class="container-fluid fill mb-4" id="container3">
          <div class="container ps-0 pe-0 pt-2 pb-4" style="text-align: center;">
          <h1 class="display-4 text-primary-emphasis" style="text-shadow: 1px 1px lightblue;">
            <strong>ETF 主題分類</strong>
          </h1>
          <div class="d-flex flex-row flex-wrap justify-content-center gap-4">
      <!-- img-link -->
            <div style="position: relative; text-align: center; color: white;">
              <a class="me-2 link-light fs-4" href = "/">
                <img id="img-link" src="../public/chips.jpg" alt="chips" height="256px" width="256px" class="rounded-4">
                <div style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);">
                  半導體</div>
              </a>
            </div>
            <div style="position: relative; text-align: center; color: white;">
              <a class="me-2 link-light fs-4" href = "/">
                <img id="img-link" src="../public/5g.jpg" alt="chips" height="256px" width="256px" class="rounded-4">
                <div style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);">
                  5G通訊衛星</div>
              </a>
            </div>
            <div style="position: relative; text-align: center; color: white;">
              <a class="me-2 link-light fs-4" href = "/">
                <img id="img-link" src="../public/ecar.jpg" alt="chips" height="256px" width="256px" class="rounded-4">
                <div style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);">
                  電動車時代</div>
              </a>
            </div>
            <div style="position: relative; text-align: center; color: white;">
              <a class="me-2 link-light fs-4" href = "/">
                <img id="img-link" src="../public/esg.jpg" alt="chips" height="256px" width="256px" class="rounded-4">
                <div style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);">
                  永續ESG</div>
              </a>
            </div>
            <div style="position: relative; text-align: center; color: white;">
              <a class="me-2 link-light fs-4" href = "/">
                <img id="img-link" src="../public/win.jpg" alt="chips" height="256px" width="256px" class="rounded-4">
                <div style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);">
                  得獎ETF</div>
              </a>
            </div>
            <div style="position: relative; text-align: center; color: white;">
              <a class="me-2 link-light fs-4" href = "/">
                <img id="img-link" src="../public/bond.jpg" alt="chips" height="256px" width="256px" class="rounded-4">
                <div style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);">
                  海外債券</div>
              </a>
            </div>
            <div style="position: relative; text-align: center; color: white;">
              <a class="me-2 link-light fs-4" href = "/">
                <img id="img-link" src="../public/month.jpg" alt="chips" height="256px" width="256px" class="rounded-4">
                <div style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);">
                  月配息</div>
              </a>
            </div>
            <div style="position: relative; text-align: center; color: white;">
              <a class="me-2 link-light fs-4" href = "/">
                <img id="img-link" src="../public/quarter.jpg" alt="chips" height="256px" width="256px" class="rounded-4">
                <div style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);">
                  季配息</div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </main>
    
</template>

<script>
var etfCapital     = [1360,1586,2043,2883,3335,3976,3894,5430,8432,11715,18799,23824];
var etfTransaction = [2817,4323,16290,16783,11037,16853,17158,23066,23898,29360,34389,43674];
var year           = [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024]

// console.log(data)

export default {
  name: 'App',
  methods: {
    draw: function(ctx) {
      var myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: year,
          datasets: [
                  {label: "ETF 資產規模",
                      data: etfCapital,
                      backgroundColor: "rgba(255, 193, 7, 0.5)",
                      borderColor: "rgba(255, 193, 7, 1)",
                      borderWidth: 1,
                      borderRadius: 5,
                      yAxisID: 'y1' 
                  },
                  {label: "ETF 成交金額",
                      type:'line',
                      data: etfTransaction,
                      backgroundColor:"rgba(13, 110, 253, 1)",
                      borderColor: "rgba(13, 110, 253, 1)",
                      borderWidth: 3,
                      // pointStyle: false,
                      pointStyle: 'circle',
                      pointRadius: 4,
                      pointHoverRadius: 8,
                      // cubicInterpolationMode: 'monotone',
                      tension: 0.4,
                      yAxisID: 'y2'  // 指定使用哪個 Y 軸
                  }
              ]
        },
        options: {
              responsive: true,
              layout:{padding:20},
              scales: {
                  y1:{
                    type:'linear',
                    display:true,
                    suggestedMax:30000,
                    title:{
                      display:true,
                      text: '資產規模(億元)',
                      // color: '#282429',
                      font: {
                        // family: 'Times',
                        size: 14,
                        // style: 'normal',
                        lineHeight: 1.2
                      },
                    },
                    position:'left',
                    grid: {display: false,},
                  },
                  y2:{
                    type:'linear',
                    display:true,
                    suggestedMax:50000,
                    title:{
                      display:true,
                      text: '成交金額(億元)',
                      // color: '#282429',
                      font: {
                        // family: 'Times',
                        size: 14,
                        // style: 'normal',
                        lineHeight: 1.2
                      },
                    },
                    position:'right',
                    grid: {display: false,},
                  }
              },
              plugins:{
                title: {
                  display: true,
                  text: '截止時間: 2024.04.17',
                  position:'bottom',
                  align:'end',
                  font:{size:10}
                },
                tooltip: {
                  callbacks: {
                      label: function (context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ':';
                        }
                        if (context.parsed.y !== null) {
                            label += new Intl.NumberFormat('zh-TW', { style: 'currency', currency: 'NTD'}).format(context.parsed.y);
                            label += ' 億元'
                        }
                        return label;
                      }
                  }
                }
              }
          }
      });
    }
  },
  mounted: function() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.translate(0.5, 0.5);
    ctx.imageSmoothingEnabled = false;
    this.draw(ctx);
  },
  async setup(){
    const search = async () => {
    const response = await $fetch('/api/components', {
      method: 'POST',
      body: {
      }
    });
    console.log(response);
    };
    search()
  }
}

</script>

<style>
  #container3 {
    background-color: rgba(var(--bs-warning-rgb), .8);
  }
  #nav-link1:hover {
    background-color: rgba(0,0,0,.2);
  }
  #nav-link2:hover {
    background-color: rgba(0,0,0,.2);
  }
  #img-link {
    opacity: .6;
    transition: 0.1s;
  }
  #img-link:hover {
    opacity: 1;
    transform: scale(1.1);
  }
  #goTopText:hover {
    font-size: 150%;
  }
</style>