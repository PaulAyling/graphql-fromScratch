userId:ur-1001
contributed to 2 documents
    document:doc-1001 has 2 contributors
    document:doc-1002 has only 1 contributors   (just ur-1001)


user       PK:userId       FK:viewId             |       user             1 :  many        views
view       PK:viewId       FK:userId             |       view             1 : 1            user
view       PK:viewId       FK:docId              |       view          many :  1           Docoument 
Document   PK:docId        FK:viewId             |       Document         1 :  many        views


Query path  all docs: with all views & user details: for 1 user
1. user logs in     -> get userId
2. userId           -> get views
3. viewId           -> get docs     (get all docs for this user)

-- now get data for each document
4. docId            -> get views    (other viewId from other cotributors)
5. viewId           -> get users    (user data for contirbutors)


