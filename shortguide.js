import React from 'react'

import PropTypes from 'prop-types'

import './shortguide.css'

const SHORTGUIDE = (props) => {
  return (
    <div className="shortguide-layout349 thq-section-padding">
      <div className="shortguide-max-width thq-section-max-width">
        <div className="shortguide-container">
          <h2 className="shortguide-heading thq-heading-2">{props.heading1}</h2>
          <span className="shortguide-text thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="shortguide-container1 thq-grid-4">
          <div className="shortguide-card thq-card">
            <img
              alt={props.feature1ImageAlt}
              src="https://www.newportacademy.com/wp-content/uploads/resources-power-of-intentions-hero.jpg"
              className="shortguide-image thq-img-round"
            />
            <h2 className="shortguide-text01 thq-heading-2">
              {props.feature1Title}
            </h2>
            <span className="shortguide-text02 thq-body-small">
              {props.feature1Description}
            </span>
          </div>
          <div className="shortguide-card1 thq-card">
            <img
              alt={props.feature2ImageAlt}
              src="https://mydoctor.kaiserpermanente.org/mas/Images/thumbnail_large_mental-health-exercise_tcm88-1903988.jpg"
              className="shortguide-image1 thq-img-round"
            />
            <h2 className="shortguide-text03 thq-heading-2">
              {props.feature2Title}
            </h2>
            <span className="shortguide-text04 thq-body-small">
              {props.feature2Description}
            </span>
          </div>
          <div className="shortguide-card2 thq-card">
            <img
              alt={props.feature3ImageAlt}
              src="https://media.istockphoto.com/id/935229156/photo/woman-hand-yoga-pose-practicing-meditation-and-praying-indoors.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=U9YLghe1OTFp0l0ncM4GtrjXanazLbGAC717FMUGSJ4="
              className="shortguide-image2 thq-img-round"
            />
            <h1 className="shortguide-text05 thq-heading-2">
              {props.feature3Title}
            </h1>
            <span className="shortguide-text06 thq-body-small">
              {props.feature3Description}
            </span>
          </div>
          <div className="shortguide-card3 thq-card">
            <img
              alt={props.feature4ImageAlt}
              src="https://www.connectedwomen.co/wp-content/uploads/2017/03/The-Potential-Of-Connecting-With-People.gif"
              className="shortguide-image3 thq-img-round"
            />
            <h1 className="shortguide-heading1 thq-heading-2">
              {props.feature4Title}
            </h1>
            <span className="shortguide-text07 thq-body-small">
              {props.feature4Description}
            </span>
          </div>
          <div className="shortguide-card4 thq-card">
            <img
              alt={props.feature5ImageAlt}
              src="https://www.allprodad.com/wp-content/uploads/2020/08/08-28-20-positive-thinking.jpg"
              className="shortguide-image4 thq-img-round"
            />
            <h1 className="shortguide-text08 thq-heading-2">
              {props.feature5Title}
            </h1>
            <span className="shortguide-text09 thq-body-small">
              {props.feature5Description}
            </span>
          </div>
          <div className="shortguide-card5 thq-card">
            <img
              alt={props.feature6ImageAlt}
              src="https://st2.depositphotos.com/1594308/9579/i/450/depositphotos_95793324-stock-photo-beautiful-woman-meditating.jpg"
              className="shortguide-image5 thq-img-round"
            />
            <h1 className="shortguide-text10 thq-heading-2">
              {props.feature6Title}
            </h1>
            <span className="shortguide-text11 thq-body-small">
              {props.feature6Description}
            </span>
          </div>
          <div className="shortguide-card6 thq-card">
            <img
              alt={props.feature7ImageAlt}
              src="https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2017/12/2018-photography-goals.jpg"
              className="shortguide-image6 thq-img-round"
            />
            <h1 className="shortguide-text12 thq-heading-2">
              {props.feature7Title}
            </h1>
            <span className="shortguide-text13 thq-body-small">
              {props.feature7Description}
            </span>
          </div>
          <div className="shortguide-card7 thq-card">
            <img
              alt={props.feature8ImageAlt}
              src="https://img.freepik.com/premium-photo/group-business-people-happily-celebrates-successful-team-effort-with-colorful-balloons-happy-diverse-employees-team-celebrating-success-ai-generated_538213-46558.jpg"
              className="shortguide-image7 thq-img-round"
            />
            <h1 className="shortguide-heading2 thq-heading-2">
              {props.feature8Title}
            </h1>
            <span className="shortguide-text14 thq-body-small">
              {props.feature8Description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

SHORTGUIDE.defaultProps = {
  feature6ImageAlt: 'stuff',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1550792436-181701c71f63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI1MjM5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description:
    "Take a few minutes to write down or mentally list things you're grateful for. Focusing on the positive aspects of your life can shift your perspective and boost your mood.",
  feature8Title: '8. Celebrate Small Wins',
  feature1ImageAlt: 'Image depicting physical fitness activities',
  heading1: 'SHORT GUIDE FOR A BETTER MOOD',
  feature5ImageSrc:
    'https://images.unsplash.com/photo-1558441863-6065e98a9f1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI1MjM5M3w&ixlib=rb-4.0.3&q=80&w=1400',
  feature3Title: '3. Practice Gratitude',
  feature7Title: '7. Set Achievable Goals',
  feature2ImageAlt: 'Image showcasing nutritious food choices',
  feature2Title: '2. Move Your Body',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1603127094454-c687bb107d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI1MjM5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI1MjM5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature7ImageAlt: 'Image depicting a wellness workshop setting',
  feature8Description:
    'Acknowledge and celebrate your achievements, no matter how small they may seem. Recognizing your progress can boost confidence and motivation to keep moving forward.',
  feature5Description:
    "Take a break from social media or news if it's causing stress or negativity. Instead, focus on activities that bring you joy and inspiration.",
  feature1Title: '1. Set a Positive Intention',
  feature6Title: '6. Engage in Mindfulness or Meditation',
  feature6Description:
    'Spend a few minutes practicing mindfulness or meditation to calm the mind and increase self-awareness. This can help you regain focus and clarity.',
  feature8ImageSrc:
    'https://images.unsplash.com/photo-1692298110937-45f36d9cfd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI1MjM5NHw&ixlib=rb-4.0.3&q=80&w=1400',
  feature4Title: '4. Connect with Others',
  feature5ImageAlt: 'Image illustrating one-on-one coaching session',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1458501534264-7d326fa0ca04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI1MjM5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'This section will focus on a easy step by step guide for improving personal mood and reinvigorating motivation for those though days.',
  feature6ImageSrc:
    'https://images.unsplash.com/photo-1606903037631-f09fd0bd74b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI1MjM5NXw&ixlib=rb-4.0.3&q=80&w=1400',
  feature4Description:
    'Reach out to a friend or loved one for a chat or spend time with a pet if you have one. Social connections can provide support and uplift your spirits.',
  feature7Description:
    'Break down your tasks into smaller, manageable goals. Accomplishing even small tasks can boost your confidence and motivation.',
  feature5Title: '5. Limit Negative Inputs',
  feature2Description:
    "Engage in physical activity, even if it's just a short walk or some stretching. Exercise releases endorphins, which can improve mood and energy levels.",
  feature7ImageSrc:
    'https://images.unsplash.com/photo-1523459178261-028135da2714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTI1MjM5M3w&ixlib=rb-4.0.3&q=80&w=1400',
  feature3ImageAlt: 'Image symbolizing mental health and relaxation',
  feature8ImageAlt: 'Illustration symbolizing holistic wellness',
  feature4ImageAlt: 'Image representing social connections and support',
  feature1Description:
    'Begin by setting a positive intention for the day. It could be as simple as "I will approach today with a positive mindset" or "I will focus on finding joy in small moments."',
}

SHORTGUIDE.propTypes = {
  feature6ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature8Title: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  heading1: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
  feature3Title: PropTypes.string,
  feature7Title: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature2Title: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature7ImageAlt: PropTypes.string,
  feature8Description: PropTypes.string,
  feature5Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature6Title: PropTypes.string,
  feature6Description: PropTypes.string,
  feature8ImageSrc: PropTypes.string,
  feature4Title: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  content1: PropTypes.string,
  feature6ImageSrc: PropTypes.string,
  feature4Description: PropTypes.string,
  feature7Description: PropTypes.string,
  feature5Title: PropTypes.string,
  feature2Description: PropTypes.string,
  feature7ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature8ImageAlt: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature1Description: PropTypes.string,
}

export default SHORTGUIDE
