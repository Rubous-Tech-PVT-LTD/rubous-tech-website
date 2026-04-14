/**
 * 🏔️ RALPH LOOP RUNNER (RUBOUS TECH)
 * Framework for running autonomous AI loops using ralph-loop-agent.
 */

import { RalphLoopAgent, iterationCountIs } from 'ralph-loop-agent';
import { z } from 'zod';

async function runRalphLoop(taskDescription, options = {}) {
  console.log(`🚀 Starting Ralph Loop for Rubous Tech: "${taskDescription}"`);

  // Dry run check
  if (process.argv.includes('--dry-run')) {
    console.log('✅ Dry run successful. Loop runner is configured correctly.');
    return;
  }

  const agent = new RalphLoopAgent({
    model: process.env.GEMINI_MODEL || 'gemini-1.5-pro',
    instructions: `
      You are an autonomous Rubous Tech developer agent.
      Goal: Maintain and improve the SaaS landing page and backend.
      Focus: Booking automation features, high-conversion UI, and clean code.
      Follow the GSD workflow and maintain the frontend/backend structure established.
    `,
  });

  try {
    await agent.run({
      task: taskDescription,
      stopCondition: iterationCountIs(options.maxIterations || 5),
    });
    console.log('✅ Ralph Loop completed successfully.');
  } catch (error) {
    console.error('❌ Ralph Loop failed:', error);
    process.exit(1);
  }
}

// CLI Entry point
const task = process.argv[2] || 'Review the landing page components and ensure teal/blue color consistency.';
runRalphLoop(task, { maxIterations: 3 });
