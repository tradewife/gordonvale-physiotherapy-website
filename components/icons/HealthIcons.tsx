import React from 'react'
import { GlassmorphismIcon } from './GlassmorphismIcon'
import {
  Accessible,
  LocalParking,
  LocalHospital,
  Security,
  LocationOn,
  Schedule,
  Bolt,
  Favorite,
} from '@mui/icons-material'

interface IconProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const WheelchairGlassIcon: React.FC<IconProps> = ({ size, className }) => (
  <GlassmorphismIcon size={size} className={className} variant="iridescent">
    <Accessible sx={{
      fontSize: 42,
      color: '#4f46e5',
      fontWeight: 'bold',
      filter: 'drop-shadow(0 0 1px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 2px rgba(0, 0, 0, 0.6)) drop-shadow(0 3px 6px rgba(79, 70, 229, 0.4)) drop-shadow(0 1px 2px rgba(79, 70, 229, 0.6))',
      WebkitTextStroke: '0.5px rgba(0, 0, 0, 0.3)'
    }} />
  </GlassmorphismIcon>
)

export const ParkingGlassIcon: React.FC<IconProps> = ({ size, className }) => (
  <GlassmorphismIcon size={size} className={className} variant="iridescent">
    <LocalParking sx={{
      fontSize: 42,
      color: '#059669',
      fontWeight: 'bold',
      filter: 'drop-shadow(0 0 1px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 2px rgba(0, 0, 0, 0.6)) drop-shadow(0 3px 6px rgba(5, 150, 105, 0.4)) drop-shadow(0 1px 2px rgba(5, 150, 105, 0.6))',
      WebkitTextStroke: '0.5px rgba(0, 0, 0, 0.3)'
    }} />
  </GlassmorphismIcon>
)

export const HospitalGlassIcon: React.FC<IconProps> = ({ size, className }) => (
  <GlassmorphismIcon size={size} className={className} variant="iridescent">
    <LocalHospital sx={{
      fontSize: 42,
      color: '#dc2626',
      fontWeight: 'bold',
      filter: 'drop-shadow(0 0 1px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 2px rgba(0, 0, 0, 0.6)) drop-shadow(0 3px 6px rgba(220, 38, 38, 0.4)) drop-shadow(0 1px 2px rgba(220, 38, 38, 0.6))',
      WebkitTextStroke: '0.5px rgba(0, 0, 0, 0.3)'
    }} />
  </GlassmorphismIcon>
)

export const InsuranceGlassIcon: React.FC<IconProps> = ({ size, className }) => (
  <GlassmorphismIcon size={size} className={className} variant="iridescent">
    <Security sx={{
      fontSize: 42,
      color: '#7c3aed',
      fontWeight: 'bold',
      filter: 'drop-shadow(0 0 1px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 2px rgba(0, 0, 0, 0.6)) drop-shadow(0 3px 6px rgba(124, 58, 237, 0.4)) drop-shadow(0 1px 2px rgba(124, 58, 237, 0.6))',
      WebkitTextStroke: '0.5px rgba(0, 0, 0, 0.3)'
    }} />
  </GlassmorphismIcon>
)

export const LocationGlassIcon: React.FC<IconProps> = ({ size, className }) => (
  <GlassmorphismIcon size={size} className={className} variant="iridescent">
    <LocationOn sx={{
      fontSize: 42,
      color: '#ea580c',
      fontWeight: 'bold',
      filter: 'drop-shadow(0 0 1px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 2px rgba(0, 0, 0, 0.6)) drop-shadow(0 3px 6px rgba(234, 88, 12, 0.4)) drop-shadow(0 1px 2px rgba(234, 88, 12, 0.6))',
      WebkitTextStroke: '0.5px rgba(0, 0, 0, 0.3)'
    }} />
  </GlassmorphismIcon>
)

export const ScheduleGlassIcon: React.FC<IconProps> = ({ size, className }) => (
  <GlassmorphismIcon size={size} className={className} variant="iridescent">
    <Schedule sx={{
      fontSize: 42,
      color: '#0891b2',
      fontWeight: 'bold',
      filter: 'drop-shadow(0 0 1px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 2px rgba(0, 0, 0, 0.6)) drop-shadow(0 3px 6px rgba(8, 145, 178, 0.4)) drop-shadow(0 1px 2px rgba(8, 145, 178, 0.6))',
      WebkitTextStroke: '0.5px rgba(0, 0, 0, 0.3)'
    }} />
  </GlassmorphismIcon>
)

export const RecoveryGlassIcon: React.FC<IconProps> = ({ size, className }) => (
  <GlassmorphismIcon size={size} className={className} variant="iridescent">
    <Bolt sx={{
      fontSize: 42,
      color: '#eab308',
      fontWeight: 'bold',
      filter: 'drop-shadow(0 0 1px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 2px rgba(0, 0, 0, 0.6)) drop-shadow(0 3px 6px rgba(234, 179, 8, 0.4)) drop-shadow(0 1px 2px rgba(234, 179, 8, 0.6))',
      WebkitTextStroke: '0.5px rgba(0, 0, 0, 0.3)'
    }} />
  </GlassmorphismIcon>
)

export const CareGlassIcon: React.FC<IconProps> = ({ size, className }) => (
  <GlassmorphismIcon size={size} className={className} variant="iridescent">
    <Favorite sx={{
      fontSize: 42,
      color: '#e11d48',
      fontWeight: 'bold',
      filter: 'drop-shadow(0 0 1px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 2px rgba(0, 0, 0, 0.6)) drop-shadow(0 3px 6px rgba(225, 29, 72, 0.4)) drop-shadow(0 1px 2px rgba(225, 29, 72, 0.6))',
      WebkitTextStroke: '0.5px rgba(0, 0, 0, 0.3)'
    }} />
  </GlassmorphismIcon>
)
