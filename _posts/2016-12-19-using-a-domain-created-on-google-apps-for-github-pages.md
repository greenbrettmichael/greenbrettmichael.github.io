---
layout: post
published: true
title: Using a Domain Created On Google Apps For Github Pages
---
    If you are reading this you have probably set up an individual account
    for email through Google Apps (G Suite). You will need to access the DNS
    record manager with your DNS Provider; if you bought the domain while
    setting up your G Suite account this is either Enom or GoDaddy. You will
    need to get your account credentials through Google admin console. It can
    be accessed through the Domains page(search domains at the top of the
    console) under Advanced DNS Settings. Select Sign in to DNS Console and
    use the credentials to access the Domain Services page.
    
    
    We will be focusing on the Host Records.
    First modify the A records to point towards Github's servers instead of  Google' : 
    
    1. remove all records of record type A
    
    2. add entry with Host Name @, Address 192.30.252.154, record type A
    
    3. add entry with Host Name @, Address 192.30.252.153, record type A
    Second replace the CNAME entry to point towards your github pages address,
    edit the record with host name www, enter the address as 
    **username.github.io.**
    A CNAME (Canonical Name record) helps the github servers at the ip address
    we targeted resolve the ip that hosts your github page.
    Leave any MX entries alone.
   
    Last create a CNAME file at the root of your github pages directory. It
    should be called CNAME exactly, the contents of this file will be      
    only **yourDomain.com**
    
    The next step is to wait for the DNS timeout to finish so that the
    address points to the right place. If you are impatient (or this process
    needs to be troubleshooted ) I found dig to be a great tool. There are
    many articles on how to use dig logs online
