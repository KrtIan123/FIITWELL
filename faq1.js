import React from 'react'

import PropTypes from 'prop-types'

import './faq1.css'

const FAQ1 = (props) => {
  return (
    <div className={`faq1-faq7 thq-section-padding ${props.rootClassName} `}>
      <div className="faq1-max-width thq-section-max-width">
        <div className="thq-flex-column">
          <h2 className="faq1-text thq-heading-2">{props.heading1}</h2>
        </div>
        <li className="list-item">
          <span className="faq1-text01">
            <span className="faq1-text02">Set Clear Goals</span>
            <span className="faq1-text03">:</span>
            <span className="">
              {' '}
              Determine what you want to achieve with your workout. Whether
              it&apos;s weight loss, muscle gain, improved flexibility, or
              general fitness, having clear goals will help you choose the right
              type of workout. 
            </span>
          </span>
        </li>
        <li className="faq1-li1 list-item">
          <span className="faq1-text05">
            <span className="faq1-text06">Choose Activities You Enjoy</span>
            <span className="">
              : Select exercises that you find enjoyable and sustainable.
              Whether it&apos;s swimming, cycling, dancing, or yoga, finding
              activities you like will increase your motivation to stick with
              your workout routine.
            </span>
            <span className="">
              : Consider your current fitness level and any limitations you may
              have. If you&apos;re a beginner, start with low-impact exercises
              and gradually increase intensity as you build strength and
              endurance.
            </span>
          </span>
        </li>
        <li className="list-item">
          <span className="faq1-text09">
            <span className="faq1-text10">Choose Activities You Enjoy</span>
            <span className="">
              : Select exercises that you find enjoyable and sustainable.
              Whether it&apos;s swimming, cycling, dancing, or yoga, finding
              activities you like will increase your motivation to stick with
              your workout routine.
            </span>
          </span>
        </li>
        <li className="list-item">
          <span className="faq1-text12">
            <span className="faq1-text13">Mix It Up</span>
            <span className="">
              : Incorporate a mix of cardiovascular exercises (like running or
              cycling), strength training (using weights or bodyweight
              exercises), flexibility exercises (such as yoga or stretching),
              and balance exercises (like tai chi or stability exercises). This
              variety keeps your workouts interesting and ensures you target
              different muscle groups.
            </span>
          </span>
        </li>
        <li className="list-item">
          <span className="faq1-text15">
            <span className="faq1-text16">Consider Schedule</span>
            <span className="">
              : Find a workout routine that fits into your schedule and
              lifestyle. If you have limited time, opt for shorter, more intense
              workouts or consider breaking your routine into smaller sessions
              throughout the day.
            </span>
          </span>
        </li>
        <li className="list-item">
          <span className="faq1-text18">
            <span className="faq1-text19">Listen to Your Body</span>
            <span className="">
              : Pay attention to how your body responds to exercise. Adjust your
              workout intensity or duration if you experience pain or
              discomfort. Stay hydrated before, during, and after exercise, and
              fuel your body with nutritious foods to support your workouts and
              aid in recovery. If you&apos;re unsure about the best approach for
              your fitness level or goals, consider consulting with a fitness
              professional for personalized guidance.
            </span>
          </span>
        </li>
      </div>
    </div>
  )
}

FAQ1.defaultProps = {
  faq1Question: 'What is FIITWELL?',
  heading2: 'Still have a question?',
  faq1Answer:
    'FIITWELL is a platform dedicated to helping individuals achieve personal growth through physical and mental fitness, focusing on key areas such as Physical Fitness, Nutrition, Mental Health, and Social Wellness.',
  faq4Question: 'How can I get started with FIITWELL?',
  faq4Answer:
    'Getting started with FIITWELL is easy! Simply create an account on our platform, explore the available resources and programs, set your wellness goals, and begin your journey towards personal growth and well-being.',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  rootClassName: '',
  content2:
    'Return to our homescreen and email us using our email address or contact number.',
  faq2Question: 'How can FIITWELL help me improve my overall wellness?',
  heading1: 'Quick Tips and Tricks for Workout Prepping',
  faq3Answer:
    'Yes, FIITWELL is designed to cater to individuals of all fitness levels, from beginners to advanced practitioners. Our platform offers a variety of programs and resources that can be tailored to meet your specific needs and goals.',
  action1: 'Contact',
  faq2Answer:
    'FIITWELL provides resources, guidance, and support to help you enhance your physical fitness, adopt healthier nutrition habits, prioritize your mental well-being, and cultivate positive social connections.',
  faq3Question: 'Is FIITWELL suitable for all fitness levels?',
  faq5Question: 'Is FIITWELL only focused on physical fitness?',
  faq5Answer:
    'While physical fitness is a key component of FIITWELL, our platform also emphasizes the importance of nutrition, mental health, and social wellness in achieving overall well-being. We believe in a holistic approach to personal growth.',
}

FAQ1.propTypes = {
  faq1Question: PropTypes.string,
  heading2: PropTypes.string,
  faq1Answer: PropTypes.string,
  faq4Question: PropTypes.string,
  faq4Answer: PropTypes.string,
  content1: PropTypes.string,
  rootClassName: PropTypes.string,
  content2: PropTypes.string,
  faq2Question: PropTypes.string,
  heading1: PropTypes.string,
  faq3Answer: PropTypes.string,
  action1: PropTypes.string,
  faq2Answer: PropTypes.string,
  faq3Question: PropTypes.string,
  faq5Question: PropTypes.string,
  faq5Answer: PropTypes.string,
}

export default FAQ1
