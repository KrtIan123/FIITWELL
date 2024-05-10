import React from 'react'

import PropTypes from 'prop-types'

import './team14.css'

const Team14 = (props) => {
  return (
    <div className="team14-team8 thq-section-padding">
      <div className="team14-max-width thq-section-max-width">
        <div className="team14-section-title">
          <div className="team14-content">
            <h2 className="team14-text thq-heading-2">{props.heading1}</h2>
            <p className="team14-text01 thq-body-large">{props.content2}</p>
          </div>
        </div>
        <div
          data-thq="slider"
          data-loop="true"
          data-autoplay="true"
          data-navigation="true"
          data-pagination="true"
          className="team14-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="team14-slider-slide swiper-slide"
            >
              <div className="team14-card">
                <a
                  href="https://www.betterhelp.com/get-started/?go=true&amp;utm_source=AdWords&amp;utm_medium=Search_PPC_c&amp;utm_term=online+counseling+free_b&amp;utm_content=136971342842&amp;network=g&amp;placement=&amp;target=&amp;matchtype=b&amp;utm_campaign=16805123991&amp;ad_type=text&amp;adposition=&amp;kwd_id=kwd-689501355&amp;gad_source=1&amp;gclid=Cj0KCQjw6PGxBhCVARIsAIumnWZoDeNSg6HAv_dk3gL3q9q_pBGVEI2dc94heE0ofla0fdIVzdn1GWEaAl3TEALw_wcB&amp;not_found=1&amp;gor=start"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="team14-link"
                >
                  <img
                    alt={props.member1Alt}
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3d/BetterHelp_Logo.jpg"
                    className="team14-placeholder-image thq-img-ratio-1-1"
                  />
                </a>
                <div className="team14-social-icons"></div>
                <div className="team14-content1">
                  <div className="team14-title">
                    <span className="team14-text02 thq-body-small">
                      Betterhelp
                    </span>
                  </div>
                  <span className="team14-text03 thq-body-small">
                    BetterHelp is a mental health platform that provides direct
                    online counseling and therapy services via web or phone text
                    communication.
                  </span>
                </div>
              </div>
              <div className="team14-card1">
                <a
                  href="https://www.cdc.gov/mentalhealth/index.htm"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="team14-link1"
                >
                  <img
                    alt={props.member2Alt}
                    src="data:image/png;base64,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"
                    className="team14-placeholder-image1 thq-img-ratio-1-1"
                  />
                </a>
                <div className="team14-content2">
                  <div className="team14-title1">
                    <span className="team14-text04 thq-body-small">
                      {props.member2}
                    </span>
                  </div>
                  <span className="team14-text05 thq-body-small">
                    {props.member2Content}
                  </span>
                </div>
                <div className="team14-social-icons1"></div>
              </div>
              <div className="team14-card2">
                <a
                  href="https://www.nami.org"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="team14-link2"
                >
                  <img
                    alt={props.member3Alt}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNATo4SSqk_2rhSIVoZUhgeKEzCvopCaJ4R2x9he60kw&amp;s"
                    className="team14-placeholder-image2 thq-img-ratio-1-1"
                  />
                </a>
                <div className="team14-content3">
                  <div className="team14-title2">
                    <span className="team14-text06 thq-body-small">
                      {props.member3}
                    </span>
                  </div>
                  <span className="team14-text07 thq-body-small">
                    {props.member3Content}
                  </span>
                </div>
                <div className="team14-social-icons2"></div>
              </div>
              <div className="team14-card3">
                <a
                  href="https://psychcentral.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="team14-link3"
                >
                  <img
                    alt={props.member4Alt}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3v9YhsHU8Kio1UMWPBUB6B_ZVcR_pht8gbNfQMvi2yA&amp;s"
                    className="team14-placeholder-image3 thq-img-ratio-1-1"
                  />
                </a>
                <div className="team14-content4">
                  <div className="team14-title3">
                    <span className="team14-text08 thq-body-small">
                      {props.member4}
                    </span>
                  </div>
                  <span className="team14-text09 thq-body-small">
                    {props.member4Content}
                  </span>
                </div>
                <div className="team14-social-icons3"></div>
              </div>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="team14-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
        <div
          data-thq="slider"
          data-navigation="true"
          data-pagination="true"
          className="team14-slider1 swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="team14-slider-slide1 swiper-slide"
            >
              <div className="team14-card4">
                <img
                  alt={props.member1Alt}
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3d/BetterHelp_Logo.jpg"
                  className="thq-img-ratio-1-1"
                />
                <div className="team14-content5">
                  <div className="team14-title4">
                    <span className="team14-text10 thq-body-small">
                      <span>Full name</span>
                      {props.member1}
                    </span>
                  </div>
                  <span className="team14-text12 thq-body-small">
                    {props.member1Content}
                  </span>
                </div>
                <div className="team14-social-icons4">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="team14-slider-slide2 swiper-slide"
            >
              <div className="team14-card5">
                <img
                  alt={props.member2Alt}
                  src="data:image/png;base64,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"
                  className="thq-img-ratio-1-1"
                />
                <div className="team14-content6">
                  <div className="team14-title5">
                    <span className="team14-text13 thq-body-small">
                      Full name
                    </span>
                    <span className="team14-text14 thq-body-small">
                      {props.member2Job}
                    </span>
                  </div>
                  <span className="team14-text15 thq-body-small">
                    {props.member2Content}
                  </span>
                </div>
                <div className="team14-social-icons5">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="team14-slider-slide3 swiper-slide"
            >
              <div className="team14-card6">
                <img
                  alt={props.member3Alt}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNATo4SSqk_2rhSIVoZUhgeKEzCvopCaJ4R2x9he60kw&amp;s"
                  className="thq-img-ratio-1-1"
                />
                <div className="team14-content7">
                  <div className="team14-title6">
                    <span className="team14-text16 thq-body-small">
                      {props.member3}
                    </span>
                    <span className="team14-text17 thq-body-small">
                      {props.member3Job}
                    </span>
                  </div>
                  <span className="team14-text18 thq-body-small">
                    {props.member3Content}
                  </span>
                </div>
                <div className="team14-social-icons6">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="team14-slider-slide4 swiper-slide"
            >
              <div className="team14-card7">
                <img
                  alt={props.member4Alt}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3v9YhsHU8Kio1UMWPBUB6B_ZVcR_pht8gbNfQMvi2yA&amp;s"
                  className="thq-img-ratio-1-1"
                />
                <div className="team14-content8">
                  <div className="team14-title7">
                    <span className="team14-text19 thq-body-small">
                      {props.member4}
                    </span>
                    <span className="team14-text20 thq-body-small">
                      {props.member4Job}
                    </span>
                  </div>
                  <span className="team14-text21 thq-body-small">
                    {props.member4Content}
                  </span>
                </div>
                <div className="team14-social-icons7">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="team14-slider-pagination1 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
      </div>
    </div>
  )
}

Team14.defaultProps = {
  member7Src:
    'https://images.unsplash.com/photo-1541949015587-790d7cf3583b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI1MjM5NXw&ixlib=rb-4.0.3&q=80&w=14001',
  member7: 'Chris Roberts',
  member8Src:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI1MjM5NHw&ixlib=rb-4.0.3&q=80&w=1400',
  member3Alt: 'Image of Alex Johnson, Mental Health Coach',
  content2:
    'Here are a few sites that can help with mental health issues by giving information and helplines. Some of these require purchases so take note before registering to their services.',
  member1: 'Betterhelp',
  member3: 'National Alliance on Mental Health Issues',
  member5: 'Michael Brown',
  member2Content:
    'The Centers for Disease Control and Prevention is the national public health agency of the United States. It is a United States federal agency under the Department of Health and Human Services, and is headquartered in Atlanta, Georgia. They have a section for Mental Health that offers great information and guides.',
  member4: 'Psych Central',
  member5Content:
    'Michael focuses on building a supportive community within FIITWELL. He organizes social events and activities to foster connections and promote a sense of belonging among members.',
  member7Content:
    'Chris takes a holistic approach to wellness, focusing on the mind-body connection. He guides individuals in setting and achieving wellness goals that align with their values and aspirations.',
  heading1: 'MENTAL HELP WEBSITES',
  member6Content:
    'Emily is a certified fitness trainer who is dedicated to helping individuals improve their physical strength and endurance. She motivates and inspires clients to push past their limits.',
  member6Alt: 'Image of Emily Davis, Fitness Trainer',
  member6: 'Emily Davis',
  member1Content:
    'BetterHelp is a mental health platform that provides direct online counseling and therapy services via web or phone text communication.',
  member3Content:
    'The National Alliance on Mental Illness is a United States-based nonprofit organization originally founded as a grassroots group by family members of people diagnosed with mental illness.',
  member5Src:
    'https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI1MjM5NHw&ixlib=rb-4.0.3&q=80&w=1400',
  member2: 'Center for Disease Control and Prevention',
  member6Src:
    'https://images.unsplash.com/photo-1600687692479-86b5e514a678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI1MjM5NHw&ixlib=rb-4.0.3&q=80&w=1400',
  member7Alt: 'Image of Chris Roberts, Wellness Coach',
  member6Job: 'Fitness Trainer',
  member5Alt: 'Image of Michael Brown, Social Wellness Coordinator',
  member3Job: 'Mental Health Coach',
  member4Alt: 'Image of Sarah Lee, Nutrition Specialist',
  member7Job: 'Wellness Coach',
  member1Alt: 'Image of John Doe, Founder & CEO',
  member2Job: '',
  member4Job: 'Nutrition Specialist',
  member5Job: 'Social Wellness Coordinator',
  member2Alt: 'Image of Jane Smith, Head of Fitness Programs',
  member4Content:
    'Psych Central is a mental health information and news website. Psych Central is overseen by mental health professionals who create and oversee all the content published on the site.',
}

Team14.propTypes = {
  member7Src: PropTypes.string,
  member7: PropTypes.string,
  member8Src: PropTypes.string,
  member3Alt: PropTypes.string,
  content2: PropTypes.string,
  member1: PropTypes.string,
  member3: PropTypes.string,
  member5: PropTypes.string,
  member2Content: PropTypes.string,
  member4: PropTypes.string,
  member5Content: PropTypes.string,
  member7Content: PropTypes.string,
  heading1: PropTypes.string,
  member6Content: PropTypes.string,
  member6Alt: PropTypes.string,
  member6: PropTypes.string,
  member1Content: PropTypes.string,
  member3Content: PropTypes.string,
  member5Src: PropTypes.string,
  member2: PropTypes.string,
  member6Src: PropTypes.string,
  member7Alt: PropTypes.string,
  member6Job: PropTypes.string,
  member5Alt: PropTypes.string,
  member3Job: PropTypes.string,
  member4Alt: PropTypes.string,
  member7Job: PropTypes.string,
  member1Alt: PropTypes.string,
  member2Job: PropTypes.string,
  member4Job: PropTypes.string,
  member5Job: PropTypes.string,
  member2Alt: PropTypes.string,
  member4Content: PropTypes.string,
}

export default Team14
