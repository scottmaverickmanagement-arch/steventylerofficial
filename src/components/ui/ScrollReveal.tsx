import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
type Direction = 'up' | 'down' | 'left' | 'right' | 'none';
type ScrollRevealProps = {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
};
const getDirectionOffset = (
  direction: Direction)
  : {
    x: number;
    y: number;
  } => {
  switch (direction) {
    case 'up':
      return {
        x: 0,
        y: 60
      };
    case 'down':
      return {
        x: 0,
        y: -60
      };
    case 'left':
      return {
        x: 60,
        y: 0
      };
    case 'right':
      return {
        x: -60,
        y: 0
      };
    case 'none':
      return {
        x: 0,
        y: 0
      };
    default:
      return {
        x: 0,
        y: 60
      };
  }
};
export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  once = true
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: '-100px'
  });
  const offset = getDirectionOffset(direction);
  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}>

      {children}
    </motion.div>);

}
type StaggerContainerProps = {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
};
export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className = ''
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px'
  });
  const containerVariants: Variants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={className}>

      {children}
    </motion.div>);

}
export function StaggerItem({
  children,
  className = ''



}: { children: React.ReactNode; className?: string; }) {
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>);

}