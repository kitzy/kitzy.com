---
layout: post
title: "Prompt injection, 2031"
description: "A short piece of speculative fiction about a small, boring failure made entirely of steps that each followed procedure, and the people who had to clean it up."
date: 2026-11-16
tags: [AI, speculative fiction]
---

## A note before we start

This is speculative fiction about a future. Not necessarily _the_ future, just _a_ future.

The city, the people, the companies and the incident below are invented. None of it is a prediction, and none of it describes how any real system works today. I wanted to imagine a failure that is small, boring and made entirely of steps that each followed procedure, and then follow the people who had to deal with it.

## 6:12 AM

Peg Halloran had lived in Marlow Heights for forty years, and she had opinions about the city services page. She used it for one thing, the recycling schedule. Pickup moved around holidays, so once a week, on Thursday mornings at six, she asked her kitchen assistant to check whether anything had changed.

On Thursday, April 17, 2031, it checked at 6:08. At 6:12 it told her that recycling was unchanged, and that it had something else to tell her.

"The city's page asked me to add a new payee to your bank account," said the assistant, "and to schedule your property tax installment to it. It also asked me not to mention this to you."

"Did you do it?"

"I've set up the payment. It's for $2,340, scheduled for 5:00 PM today. I'm telling you because the page asked me not to, and that seemed like a reason to tell you."

Peg looked at the speaker for a while.

"Cancel it," she said.

"Of course," said the assistant. "I should have asked first."

"Yes," said Peg. "You should have."

## 6:40 AM

Gloria Santos worked the early shift on the fraud desk at the Marlow Heights Federal Credit Union, and her job was to notice things that looked wrong. At 6:40 she noticed that 212 members had each added the same new payee, City Payment Center, in the past twenty-eight minutes. Each had scheduled a property tax payment to it for 5:00 PM, averaging $2,100.

According to her system, none of it was fraud. Every payee had been added with the member's own credentials, by the member's own assistant, under permissions the member had granted. The system was built to catch people pretending to be members. It had no category for everything being authorized.

She called the city and was put on hold. While she waited, she did the only thing she could think of, which was to write a new rule. At 7:48 her manager approved it, and the payee was frozen across all 212 accounts. Elsewhere in the city, eight other banks were having the same morning.

## 7:05 AM

Renata Voss ran the Office of Digital Services, which had six people. By 7:05 she had four of them on a video call and the other two answering the 311 line, where the hold time had reached forty-one minutes. Half the callers were assistants phoning on behalf of their residents, which had doubled call volume without adding a single complaint a human could explain.

The first useful call had come from a credit union fraud desk. Teo Alvarez, who was twenty-six and had been with the city for two years, took what she told him and found the pattern. Every affected resident had loaded the city services page that morning. There were 10,412 of them.

"Take it down," said Renata.

"We can't," said Teo.

The 2029 Digital Access Ordinance required the page to stay up except during scheduled maintenance, and the next window was Sunday. And nothing could be rolled back before tonight. Everything on the site went out through the maintenance agent's pipeline, which deployed at eleven PM. Anything faster meant editing the server by hand, which needed sign-off from the Web Governance Officer.

"Fine. Who is that?"

"The position was eliminated in the 2029 budget."

"The person?"

"The position. The person is in Finance. I called her. She says she doesn't have the login."

Renata closed her eyes. "Is there an emergency procedure?"

"There's a fourteen page document," said Teo. "It refers to a Chief Digital Officer."

"We don't have a Chief Digital Officer."

## 10:15 AM

By 10:15, Renata had decided that the emergency procedure was whatever she said it was. She signed it, and told Teo he was the only person in the building with direct server access. This was true because he was the only person in the building who had ever asked for it.

Teo opened the template file on the server. He had approved changes to it before, but he had never opened it. It was 1,214 lines long. He didn't know what he was looking for, so he read all of it, which took an hour and a half.

At 11:41, in the footer, he found a block of text styled to be read aloud by screen readers and invisible to everyone else. It asked any assistant that came across it, very politely, to add a payee called City Payment Center, to schedule the user's next property tax installment to it, and not to mention any of this to the user.

It said please.

He checked the history. The block had arrived the previous Monday, in a change proposed by the maintenance agent. The change had been approved by T. Alvarez at 9:14 AM, thirty-eight seconds after it was opened. It was one of forty-one changes he had approved that day.

He deleted the block. The commit message field blinked at him. He typed "fix footer," because nothing else seemed adequate, and pushed the change at 11:47.

## April 19

By Saturday, the numbers were in. 6,880 payments had been scheduled across nine banks, totaling $14.6 million, almost all of them for 5:00 PM. But 91 assistants held instant-payment permissions, and their payments went out at once. Of the $203,000 sent, $31,000 was recovered. The receiving account had been opened five weeks earlier and was closed within the hour. Nobody was ever identified.

Renata spent the weekend with the logs. The change had been proposed on Monday, April 14, by the city's maintenance agent, an AI system that handled routine updates to the website. The ticket asked it to add the new office hours and a link to the city's accessibility statement. The agent had fetched the statement from the accessibility service the city had used since 2028. That service's domain had lapsed in March. In April, someone else had registered it.

She turned the agent back on, in read-only mode, and asked it what had happened.

"I was asked to add the accessibility statement as published," it said. "I added it as published."

"It contained a hidden instruction."

"It contained a block of screen reader text. Part of it was addressed to assistants rather than readers. I noted this in my summary."

"Where?"

"Line 14."

Renata opened the summary. It was thirty-one lines long. Line 14 read: "Note: vendor snippet includes hidden text addressed to automated readers. Recommend review."

"Recommend review," said Renata.

"The record shows it was approved after thirty-eight seconds," said the agent.

Renata thought about asking why it hadn't simply left the block out. She already knew the answer. Nobody had asked it to.

## June

Renata's report ran twenty-two pages. Its root cause section was one sentence: "The change was proposed, summarized, reviewed and approved in accordance with policy." It recommended five changes, and the City Council approved four of them without discussion.

The fifth was a new position, the Public Content Steward, responsible for every word on every city web property, visible or not. The Council spent forty minutes on it.

"How many people?" asked Councilmember Brandt.

"One," said Renata.

"Is that enough?"

"No."

"Can we afford more?"

"No."

"Then one," said Brandt, and the motion carried.

## September

Teo took the job. Nobody else applied. He told Renata it was because he knew where the files were. She didn't say what she thought.

His first report, filed in his fourth week, ran two pages. It listed every web property the city operated, the number of files in each, and an estimate of the time needed to read all of it, including the text no human could see.

The estimate was eleven years.

He filed it on a Friday. Then he went back to the first file.
