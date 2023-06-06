import styles from '../styles/ToolSection.module.scss'
import Image from 'next/image'
import { useState } from 'react'

import search from '../public/img/search.svg'
import filter from '../public/img/filter.svg'
import activeFilter from '../public/img/active-filter.svg'
import arrowDown from '../public/img/arrow-down.svg'
import arrowRight from '../public/img/arrow-right.svg'

export default function ToolSection() {
  const [option, setOption] = useState('all')
  const [mainFilter, setMainFilter] = useState(false)
  const [module, setModule] = useState('所有模型')
  const [type, setType] = useState('全部')
  const [timeFilter, setTimeFilter] = useState(false)
  const [time, setTime] = useState('從新到舊')
  const handleOption = (name) => {
    setOption(name)
  }
  const handleMainFilter = () => {
    setMainFilter(mainFilter === true ? false : true)
  }
  const handleTimeFilter = () => {
    setTimeFilter(timeFilter === true ? false : true)
  }
  const handleClickModule = () => {
    if (event.target.id) {
      setModule(event.target.id)
    }
  }
  const handleClickType = () => {
    if (event.target.id) {
      setType(event.target.id)
    }
  }
  const handleClickTime = () => {
    if (event.target.id) {
      setTime(event.target.id)
      setTimeFilter(false)
    }
  }
  return (
    <div className={styles.ToolsSection}>
      <div className={styles.SectionContainer}>
        <div className={styles.Header}>
          <p>這些超酷的應用，都來自 AI工具王</p>
        </div>
        <div className={styles.Setting}>
          <div className={styles.Search}>
            <Image src={search} alt="search" priority="true" width={24} />
            <input
              type="text"
              placeholder="輸入關鍵字搜尋"
              className={styles.SearchInput}
            />
          </div>
          <div className={styles.Filter}>
            <div className={styles.FilterSelection}>
              <div
                className={styles.FilterButton}
                onClick={() => handleMainFilter()}
              >
                {module !== '所有模型' ? module : null}
                {module !== '所有模型' && type !== '全部' ? '、' : null}
                {type !== '全部' ? type : null}
                {module === '所有模型' && type === '全部' ? '篩選' : null}
                <Image
                  src={
                    module !== '所有模型' || type !== '全部'
                      ? activeFilter
                      : filter
                  }
                  alt="filter"
                  priority="true"
                  width={16}
                  height={16}
                />
              </div>
              <div
                className={
                  mainFilter ? styles.OpenedMainFilter : styles.MainFilter
                }
              >
                <div>
                  <div>AI模型</div>
                  <ul onClick={() => handleClickModule()}>
                    <label htmlFor="所有模型">
                      <li>
                        所有模型
                        <input
                          type="radio"
                          id="所有模型"
                          name="module"
                          defaultChecked
                        />
                      </li>
                    </label>
                    <label htmlFor="卡卡">
                      <li>
                        卡卡
                        <input type="radio" id="卡卡" name="module" />
                      </li>
                    </label>
                    <label htmlFor="杰杰">
                      <li>
                        杰杰
                        <input type="radio" id="杰杰" name="module" />
                      </li>
                    </label>
                    <label htmlFor="琪琪">
                      <li>
                        琪琪
                        <input type="radio" id="琪琪" name="module" />
                      </li>
                    </label>
                    <label htmlFor="昊昊">
                      <li>
                        昊昊
                        <input type="radio" id="昊昊" name="module" />
                      </li>
                    </label>
                  </ul>
                </div>
                <div>
                  <div>類型</div>
                  <ul onClick={() => handleClickType()}>
                    <label htmlFor="全部">
                      <li>
                        全部
                        <input
                          type="radio"
                          id="全部"
                          name="type"
                          defaultChecked
                        />
                      </li>
                    </label>
                    <label htmlFor="問答服務">
                      <li>
                        問答服務
                        <input type="radio" id="問答服務" name="type" />
                      </li>
                    </label>
                    <label htmlFor="虛擬客服">
                      <li>
                        虛擬客服
                        <input type="radio" id="虛擬客服" name="type" />
                      </li>
                    </label>
                    <label htmlFor="生活應用">
                      <li>
                        生活應用
                        <input type="radio" id="生活應用" name="type" />
                      </li>
                    </label>
                    <label htmlFor="程式知識">
                      <li>
                        程式知識
                        <input type="radio" id="程式知識" name="type" />
                      </li>
                    </label>
                    <label htmlFor="翻譯助手">
                      <li>
                        翻譯助手
                        <input type="radio" id="翻譯助手" name="type" />
                      </li>
                    </label>
                    <label htmlFor="翻譯助手">
                      <li>
                        翻譯助手
                        <input type="radio" id="翻譯助手" name="type" />
                      </li>
                    </label>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.Options}>
              <ul className={styles.OptionsContainer}>
                <li className={option === 'all' ? styles.ActiveOption : null}>
                  <input
                    type="radio"
                    name="option"
                    value="all"
                    defaultChecked
                  />
                  <label
                    htmlFor="contactChoice1"
                    onClick={() => handleOption('all')}
                  >
                    全部
                  </label>
                </li>
                <li className={option === 'chat' ? styles.ActiveOption : null}>
                  <input type="radio" name="option" value="chat" />
                  <label
                    htmlFor="contactChoice1"
                    onClick={() => handleOption('chat')}
                  >
                    聊天
                  </label>
                </li>
                <li
                  className={
                    option === 'imageRecognize' ? styles.ActiveOption : null
                  }
                >
                  <input type="radio" name="option" value="imageRecognize" />
                  <label
                    htmlFor="contactChoice1"
                    onClick={() => handleOption('imageRecognize')}
                  >
                    影像辨識
                  </label>
                </li>
                <li
                  className={
                    option === 'translate' ? styles.ActiveOption : null
                  }
                >
                  <input type="radio" name="option" value="translate" />
                  <label
                    htmlFor="contactChoice1"
                    onClick={() => handleOption('translate')}
                  >
                    翻譯
                  </label>
                </li>
                <li className={option === 'sale' ? styles.ActiveOption : null}>
                  <input type="radio" name="option" value="sale" />
                  <label
                    htmlFor="contactChoice1"
                    onClick={() => handleOption('sale')}
                  >
                    行銷
                  </label>
                </li>
                <li
                  className={option === 'service' ? styles.ActiveOption : null}
                >
                  <input type="radio" name="option" value="service" />
                  <label
                    htmlFor="contactChoice1"
                    onClick={() => handleOption('service')}
                  >
                    客服
                  </label>
                </li>
                <li
                  className={option === 'product' ? styles.ActiveOption : null}
                >
                  <input type="radio" name="option" value="product" />
                  <label
                    htmlFor="contactChoice1"
                    onClick={() => handleOption('product')}
                  >
                    生產力
                  </label>
                </li>
              </ul>
            </div>
            <div className={styles.FilterSelection}>
              <div
                className={styles.TimeFilter}
                onClick={() => handleTimeFilter()}
              >
                {time}
                <Image
                  src={arrowDown}
                  alt="arrowDown"
                  priority="true"
                  width={16}
                  height={16}
                />
              </div>
              <div
                className={
                  timeFilter
                    ? styles.OpenedTimeFilterOptions
                    : styles.TimeFilterOptions
                }
              >
                <ul onClick={() => handleClickTime()}>
                  <label htmlFor="由新到舊">
                    <li>
                      由新到舊
                      <input
                        type="radio"
                        name="timeOption"
                        id="由新到舊"
                        defaultChecked
                      />
                    </li>
                  </label>

                  <label htmlFor="由舊到新">
                    <li>
                      由舊到新
                      <input type="radio" name="timeOption" id="由舊到新" />
                    </li>
                  </label>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Tools}>
          <div className={styles.Card}>
            <div className={styles.ImgContainer}>
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool1.png?raw=true"
                alt=""
                className={styles.ToolImg}
              />
            </div>
            <div className={styles.InfoBox}>
              <div className={styles.Info}>
                <h3>Chatbot Builder</h3>
                <p>
                  建立智能化的聊天機器人，解答常見問題、提供客戶支援、收集反饋等。
                </p>
              </div>
              <div className={styles.ModuleInfo}>
                <div className={styles.ModuleType}>AI 模型</div>
                <div>卡卡</div>
              </div>
              <div className={styles.Function}>
                <div className={styles.FunctionName}>#聊天</div>
                <img
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className={styles.Card}>
            <div className={styles.ImgContainer}>
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool2.png?raw=true"
                alt=""
                className={styles.ToolImg}
              />
            </div>
            <div className={styles.InfoBox}>
              <div className={styles.Info}>
                <h3>Image Recognition Platform</h3>
                <p>專業的圖像識別平台，識別圖像、分類、標記等。 </p>
              </div>
              <div className={styles.ModuleInfo}>
                <div className={styles.ModuleType}>AI 模型</div>
                <div>杰杰</div>
              </div>
              <div className={styles.Function}>
                <div className={styles.FunctionName}>#影像辨識</div>
                <img
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className={styles.Card}>
            <div className={styles.ImgContainer}>
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool3.png?raw=true"
                alt=""
                className={styles.ToolImg}
              />
            </div>
            <div className={styles.InfoBox}>
              <div className={styles.Info}>
                <h3>Language Translation API</h3>
                <p>
                  專業的語言翻譯 API，實現文本翻譯功能，支援多種格式的文本。
                </p>
              </div>
              <div className={styles.ModuleInfo}>
                <div className={styles.ModuleType}>AI 模型</div>
                <div>琪琪</div>
              </div>
              <div className={styles.Function}>
                <div className={styles.FunctionName}>#翻譯</div>
                <img
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className={styles.Card}>
            <div className={styles.ImgContainer}>
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool4.png?raw=true"
                alt=""
                className={styles.ToolImg}
              />
            </div>
            <div className={styles.InfoBox}>
              <div className={styles.Info}>
                <h3>Sentiment Analysis API</h3>
                <p>
                  自動識別文本中的情感傾向，包括正向、負向和中性等。適用於情感分析、社交媒體監控、市場調查等。
                </p>
              </div>
              <div className={styles.ModuleInfo}>
                <div className={styles.ModuleType}>AI 模型</div>
                <div>昊昊</div>
              </div>
              <div className={styles.Function}>
                <div className={styles.FunctionName}>#行銷</div>
                <img
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className={styles.Card}>
            <div className={styles.ImgContainer}>
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool5.png?raw=true"
                alt=""
                className={styles.ToolImg}
              />
            </div>
            <div className={styles.InfoBox}>
              <div className={styles.Info}>
                <h3>Fraud Detection Platform</h3>
                <p>預防詐騙活動，適用於銀行、金融、電商等。</p>
              </div>
              <div className={styles.ModuleInfo}>
                <div className={styles.ModuleType}>AI 模型</div>
                <div>卡卡</div>
              </div>
              <div className={styles.Function}>
                <div className={styles.FunctionName}>#客服</div>
                <img
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className={styles.Card}>
            <div className={styles.ImgContainer}>
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool6.png?raw=true"
                alt=""
                className={styles.ToolImg}
              />
            </div>
            <div className={styles.InfoBox}>
              <div className={styles.Info}>
                <h3>Voice Assistant SDK</h3>
                <p>
                  通過語音控制應用程式、設備，實現多種功能，例如播放音樂、查詢天氣、發送信息等。
                </p>
              </div>
              <div className={styles.ModuleInfo}>
                <div className={styles.ModuleType}>AI 模型</div>
                <div>杰杰</div>
              </div>
              <div className={styles.Function}>
                <div className={styles.FunctionName}>#生產力</div>
                <img
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <ul className={styles.Pagination}>
          <li className={styles.ActivePage}>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>
            <Image
              src={arrowRight}
              alt="arrowRight"
              priority="true"
              width={16}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}
