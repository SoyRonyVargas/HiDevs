import { AnimationControls, motion, Target, TargetAndTransition, Transition, useInView, useAnimation, VariantLabels, Variants } from 'framer-motion'
import React, { FC, useEffect, useRef } from 'react'

type Animation = AnimationControls | TargetAndTransition | VariantLabels | boolean;

type Initial = boolean | Target | VariantLabels;

type Props = {
    children?: React.ReactNode
    className?: string
}

const Animation: FC<Props> = ({ children , className }) => {

    const container = useRef(null)
    
    const isInView = useInView( container , {
        once: true,
    })

    const squareVariants : Variants = {
        visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: { 
                duration: .5,
                staggerChildren: 0.025
            } 
        },
        hidden: { 
            opacity: .5, 
            scale: .5,
            y: 50
        }
      };

    const transition : Transition = {
        duration: 1.5,
        delay: 1.95,
        ease: [0, 0.71, 0.2, 1.01]
    }

    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
          controls.start("visible");
        }
      }, [controls, isInView]);

    return (
        <motion.div 
            className={className}
            ref={container} 
            // initial={initial}
            initial={'hidden'}
            animate={controls}
            variants={squareVariants}
            // transition={transition}
        >
            {children}
        </motion.div>
    )
}

export default Animation